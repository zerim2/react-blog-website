import React from 'react'
import Banner from "../components/Banner.jsx";
import BlogPage from "../components/BlogPage.jsx";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <div className="max-w-7xl mx-auto">
                <BlogPage/>
            </div>
        </div>
    )
}

export default Home