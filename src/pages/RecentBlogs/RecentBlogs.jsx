import { useEffect, useState } from "react";
import RecentBlog from "../RecentBlog/RecentBlog";



const RecentBlogs = () => {
    
    const[ recentBlogs, setRecentBlogs] = useState([])

    useEffect(() => {
        fetch('/recent_blogs.json')
        .then(res => res.json())
        .then(data => {
            setRecentBlogs(data)
        } )
    },[])
    
    return (

        <div>
            <div className="text-center mt-10">
                <h1 className="text-3xl mb-2 text-blue-500">Our recent Blogs</h1>
                <p className="lg:px-40 mb-4"><span className="text-xl text-blue-500">StoryStream</span> Company is dedicated to unleashing the power of narrative in the digital age, where we craft compelling stories for the modern world. Our mission is to create engaging content that resonates with audiences, drives influence, and helps businesses thrive in an increasingly interconnected and story-driven landscape.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recentBlogs.map(allblog => <RecentBlog key={allblog.id} allblog={allblog}></RecentBlog>)
                }
            </div>
            
        </div>
    );
};

export default RecentBlogs;