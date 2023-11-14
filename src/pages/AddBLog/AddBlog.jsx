import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const AddBlog = () => {

    const {user} = useContext(AuthContext)
    const handleBlog = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const category = form.category.value;
        const description = form.description.value;
        const date = form.date.value;
        const image = form.image.value;

        const newBlog = { title, category, description, image, date, email: user.email }
        console.log(newBlog)

        // send data to the server
        fetch('http://localhost:501/addblog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("product Added!", "Your product has been added.", "success");
                }
            })


    }

    return (
        <div>
            <div className=" bg-blue-200 p-24 ">
                <h2 className="text-3xl font-bold text-center">ADD BLOGS</h2>
                <form onSubmit={handleBlog}>
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
                            <select className="select select-bordered w-full" name="category">
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
                                <span className="label-text"> Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Published date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="date" placeholder="date" className="input input-bordered w-full" />
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
                    <input type="submit" value="Add Blog" name="submit" className="btn btn-block border-none bg-blue-600 text-white" />
                </form>

            </div>
        </div>
    );
};

export default AddBlog;