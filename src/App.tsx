import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import NewsLetter from "./components/NewsLetter";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Category />
            <FeatureSectionFruits />
            <FeatureSectionBreakfast />
            <BannerSection />
            <BlogSection />
            <NewsLetter />
            <FeatureSection />
            <Footer />
        </main>
    );
};

export default App;

