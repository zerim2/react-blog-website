import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import {FaUser } from "react-icons/fa"
import {FaClock, FaU} from "react-icons/fa6"
import Sidebar from "../components/Sidebar.jsx";


const SingleBlog = () => {
    let { id } = useParams();
    const data = useLoaderData();
    const { title, image, category, author, published_date, reading_time, content} = data[id-1];
    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
                    Single Blog
                </h2>
            </div>

            {/*Blog Info*/}
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img src={image} alt="" className="w-full mx-auto rounded "/>
                    </div>
                    <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
                        {title}
                    </h2>
                    <p className="mb-3 text-gray-600">
                       <FaUser className="inline-flex item-center mr-2"/> {author} | {published_date}
                    </p>
                    <p className="mb-3 text-gray-600">
                        <FaClock className="inline-flex item-center mr-2"/> {reading_time}
                    </p>
                    <p className="text-base text-gray-500 mb-6">{content}</p>
                    <div className="text-base text-gray-500">
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p> <br/>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <br/>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p> <br/>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p> <br/>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <p>
                                Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <br/>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p> <br/>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis.
                            Summus brains sit, morbo vel maleficia?
                            De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;