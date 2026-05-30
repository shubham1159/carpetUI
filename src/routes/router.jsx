import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import PageLoader from "../components/ui/PageLoader"; // Niche wala component yahan import karna


// Lazy Imports
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Shop = lazy(() => import("../pages/shop/Shop"));
const ProductDetails = lazy(() => import("../pages/shop/ProductDetails"));
const Cart = lazy(() => import("../pages/shop/Cart"));
const CheckoutPage = lazy(() => import("../pages/shop/CheckOut"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Auth = lazy(() => import("../pages/account/Login"));
const Profile = lazy(() => import("../pages/account/Profile"));
const WeddingChoreography = lazy(()=>import("../pages/wedding/wedding"))
const BlogDetails =  lazy(()=> import ("../pages/blogs/blogdetails"))
// Helper to wrap component with Suspense
const Loadable = (Component) => (props) => (
  <Suspense fallback={<PageLoader />}>
    <Component {...props} />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: Loadable(Home)() },
      { path: "shop", element: Loadable(Shop)() },
      { path: "about", element: Loadable(About)() },
      { path: "productDetails", element: Loadable(ProductDetails)() },
      { path: "cart", element: Loadable(Cart)() },
      { path: "checkOut", element: Loadable(CheckoutPage)() },
      { path: "contact", element: Loadable(Contact)() },
      { path: "auth", element: Loadable(Auth)() },
      { path: "profile", element: Loadable(Profile)() },
      { path: "blogdetails", element: Loadable(BlogDetails)() },
      { path: "wedding", element: Loadable(WeddingChoreography)() },
    ],
  },
]
, {
  basename: "/templates/sk/handmadecarpets/01",
}
);