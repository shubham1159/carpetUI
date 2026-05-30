import React, { useEffect, useState } from "react";
import Banner from "./sections/Banner";
import CategorySection from "./sections/Category";
import CTASection from "./sections/CtaBanner";
import TopSelling from "../shop/Topselling";
import OurProducts from "./sections/OurProducts";
import Testimonial from "./sections/Testimonials";
import CouponMarquee from "./sections/Coupon";
import Blog from "../blogs/blog";
import UniqueCTA from "./sections/CtaBanner02";
import AboutJourney from "./sections/AboutJourney";
import TopPerformances from "../shop/Topselling";
import DealOfTheDay from "./sections/Dealfotheday";

const Home = () => {
  return (
    <div>
      <Banner/>
      <CategorySection/>
      <TopPerformances/>
      <CTASection/>
      <OurProducts/>
      {/* <CouponMarquee/> */}
      <UniqueCTA/>
      {/* <AboutJourney/> */}
      <DealOfTheDay/>
      <Testimonial/>  
      <Blog/>
    </div>
  );
};

export default Home;
