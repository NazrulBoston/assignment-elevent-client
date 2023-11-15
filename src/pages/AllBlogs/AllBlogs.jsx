import { useEffect, useState } from "react";
import AllBlog from "../../components/AllBlog";


const AllBlogs = () => {



    const [allBlogs, setAllBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:501/addblog')
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data)
            })
    }, [])



    const handleSearchBlog = (e) => {
        e.preventDefault();
        const enteredSearchValue = e.target.search.value.toLowerCase();
        e.target.reset();

        const filteredBlog = allBlogs.filter(
            (blog) => blog.title.toLowerCase() === enteredSearchValue
        );

        setFilteredBlogs(filteredBlog);
    };

    const handleSearchCategory = (e) => {
        e.preventDefault();
        const enteredSearchValue = e.target.category.value;
        e.target.reset();

        const filteredBlog = allBlogs.filter(
            (blog) => blog.category === enteredSearchValue
        );

        setFilteredBlogs(filteredBlog);
    };

    const blogsToDisplay = filteredBlogs.length ? filteredBlogs : allBlogs;



    console.log(allBlogs)
    return (


        <>
            <div className="md:flex justify-between max-w-6xl mx-auto">
                <form
                    onSubmit={handleSearchBlog}
                    className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full md:w-1/3"
                >
                    <button className=" text-white bg-fuchsia-400 btn-group btn border-none border-l-2 w-1/3 border-blue-400 rounded-r-md">
                        Search
                    </button>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Here"
                        className="pl-4 w-2/3 border-none"
                    />
                </form>
                <form
                    onSubmit={handleSearchCategory}
                    className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full md:w-1/3"
                >
                    <select
                        className="w-full my-2 p-1 rounded-md"
                        name="category"
                        id="category"
                    >
                        <option value="">Select a category</option>
                        {allBlogs.map((blog) => (
                            <option key={blog._id} value={blog.category}>
                                {blog.category}
                            </option>
                        ))}
                    </select>
                    <button className="  text-white bg-fuchsia-400 btn-group btn border-none border-l-2 w-1/3 border-blue-400 rounded-r-md">
                        Search
                    </button>
                </form>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    blogsToDisplay.map(blog => <AllBlog key={blog._id} blog={blog}></AllBlog>)
                }
            </div>

        </>
    );
};

export default AllBlogs;