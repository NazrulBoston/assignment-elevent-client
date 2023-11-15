import { useLoaderData } from "react-router-dom";


const BlogDetailsPage = () => {
    const blog = useLoaderData();
    console.log(blog)
    return (
        <div>
            <h2>This is BlogDetailsPage</h2>
        </div>
    );
};

export default BlogDetailsPage;