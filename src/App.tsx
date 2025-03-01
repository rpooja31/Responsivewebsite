import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardCountBadge from "./components/CardCountBadge";
import Category from "./components/Category";
import CategoryCard from "./components/CategoryCard";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import ProductCard from "./components/ProductCard";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import BlogCard from "./components/BlogCard";
import NewsLetter from "./components/NewsLetter";
import FeatureSection from "./components/FeatureSection";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";

const App = (props) => {
    return (
        <main>
          <Navbar/>
          <Hero/>
          <CardCountBadge/>
          <Category/>
          <CategoryCard/>
          <FeatureSectionFruits/>
          <ProductCard/>
          <FeatureSectionBreakfast/>
          <BannerSection/>
          <BlogSection/>
          <BlogCard/>
          <NewsLetter/>
          <FeatureSection/>
          <FeatureCard/>
          <Footer/>
          
        </main>
    );
};

export default App;
