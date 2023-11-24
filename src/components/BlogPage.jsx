import React, {useEffect, useState} from 'react'
import {BlogCards} from "./BlogCards.jsx";
import Pagination from "./Pagination.jsx";
import Categories from "./Categories.jsx";
import Sidebar from "./Sidebar.jsx";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //Number of blogs
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);


    useEffect(() => {
        async function fetchBlogs() {
            let url = `https://blog-server-h9b2.vercel.app/api/blogsData.json?page=${currentPage}&limit=${pageSize}`;


            // filter by category
            if(selectedCategory){
                url +=`&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setBlogs(data)
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber)
        }

        const handleCategoryChange = (category) => {
            setSelectedCategory(category);
            setCurrentPage(1);
            setActiveCategory(category);
            //console.log(activeCategory);
        }

        //page changer
    return (
        <div>
            {/* Categories section */}
            <div>
                 <Categories onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
            </div>
            {/*Blogcard */}
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory}
                pageSize={pageSize}/>

                {/*Sidebar */}
                <div>
                    <Sidebar/>
                </div>
            </div>
            {/* Pagination Section */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
            </div>
        </div>
    )
}

export default BlogPage