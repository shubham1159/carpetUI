import axios from "./axiosInstance";

const homePageAPI = {
  details: () => axios.get("details"),

  homePage: (payload) => axios.post("homepage", payload),

  fetchDetailsUsingSlug: (payload) => axios.post("fetchDetailsUsingSlug", payload),
};

export default homePageAPI;
