import React from 'react';
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6"
const Banner = () => {
    return (
        <div className="px-4 py-32 bg-black mx-auto">
            <div className="text-white text-center">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
                    Welcome to our Blog
                </h1>
                <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">Start your blog today and join the community of people passionate about sharing their science and nature knowledge
                We offer everything you need to get started in building your own articles, including tutorials and guides.</p>
                <div>
                    <Link to={"/"} className="font-medium hover:text-orange-500 inline-flex items-center py-1">Learn More <FaArrowRight className={"mt-1 ml-2"}/></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;