import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
console.log("API URL:", apiUrl);

// ✅ Memory mein access token (global variable)
let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const clearAccessToken = () => {
  accessToken = null;
};

// =========================================
// Helper: logout + redirect
// =========================================
const forceLogout = () => {
  clearAccessToken();
  localStorage.removeItem("token");
  localStorage.removeItem("accessToken");
  // window.location.href = "/";
};

// =========================================
// Main axios instance
// =========================================
const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================================
// ✅ Separate instance SIRF refresh ke liye
// Ye response interceptor se nahi guzrega
// Isliye infinite loop ya transform issue nahi hoga
// =========================================
const refreshInstance = axios.create({
  baseURL: `${apiUrl}/api/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================================
// REQUEST INTERCEPTOR
// =========================================
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    const selectedStoreId = import.meta.env.VITE_STOREID;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (selectedStoreId) {
      config.headers["X-Store-ID"] = selectedStoreId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// =========================================
// RESPONSE INTERCEPTOR
// =========================================
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  // ✅ Success response transform
  (response) => {
    const { code, message, data } = response.data || {};
    return {
      code: code || 500,
      message: message || "Something went wrong! Try Again",
      data: data || null,
    };
  },

  // ✅ Error handler
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // 401 handle karo
    if (status === 401) {
      // Agar ye request already retry ho chuki hai → logout
      if (originalRequest._retry) {
        forceLogout();
        return Promise.reject(error);
      }

      // Agar refresh already chal raha hai → queue mein daal do
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // ✅ Pehli baar 401 aayi — refresh try karo
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // ✅ refreshInstance use karo — ye axiosInstance ke interceptor se nahi guzrega
        // Isliye response { code, message, data } mein transform nahi hoga
        // Seedha axios raw response milega: res.data.data.accessToken ya res.data.accessToken
        const config = {
          withCredentials: true,
          headers: {},
        };

        const selectedStoreId = import.meta.env.VITE_STOREID;
        if (selectedStoreId) {
          config.headers["X-Store-ID"] = selectedStoreId;
        }

        const token = localStorage.getItem("accessToken");

        const res = await refreshInstance.post(
          "users/auth/refresh-token",
          { accessToken: token },
          config,
        );

        // ✅ Apne API ke actual response structure ke hisaab se adjust karo
        // Common cases:
        // Case 1: { data: { accessToken: "..." } }
        // Case 2: { accessToken: "..." }
        // Case 3: { data: { data: { accessToken: "..." } } }

        const newAccessToken =
          res?.data?.data?.access_token || // nested data.data
          res?.data?.access_token || // direct data
          null;

        if (!newAccessToken) {
          console.error("Refresh response structure:", res?.data);
          throw new Error("accessToken not found in refresh response");
        }

        localStorage.setItem("accessToken", newAccessToken);
        setAccessToken(newAccessToken);
        processQueue(null, newAccessToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error(
          "❌ Token refresh failed:",
          refreshError?.response?.data || refreshError.message,
        );
        processQueue(refreshError, null);
        forceLogout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
