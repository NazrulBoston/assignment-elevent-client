

const AddBlog = () => {
    return (
        <div>
            <div className=" bg-[#c9c3ee] p-24 ">
                <h2 className="text-3xl font-bold text-center">ADD BLOGS</h2>
                <form>
                    {/* form row */}
                    <div className="md:flex mb-6 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                            </label>
                        </div>
                       
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                    <div className="form-control w-full" >
                            <select className="select select-bordered w-full">
                                <option disabled selected>Category</option>
                                <option>Beauty Blog</option>
                                <option>Edu. Blog</option>
                                <option>Fashion Blog</option>
                                <option>Food Blog</option>
                                <option>Gaming Blog</option>
                                <option>Travel Blog</option>
                            </select>

                        </div>
                        
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                    </div>
                    <div className="md:flex mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <label className="input-group">
                            <textarea placeholder="description" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                            </label>
                        </div>
                        
                    </div>
                    {/* form photo url row */}
                    <div className=" mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="photo url" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Blog" name="submit" className="btn btn-block border-none bg-blue-400 text-white" />
                </form>

            </div>
        </div>
    );
};

export default AddBlog;