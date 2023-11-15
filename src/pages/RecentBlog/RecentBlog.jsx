import { Link } from "react-router-dom";


const RecentBlog = ({ allblog }) => {
    const { title, image, description, category, details_button, wishlist_button, date } = allblog;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div ><span className="bg-blue-200 rounded">Category:</span> {category}</div>
                </h2>
                <p> <span className="text-red-500 font-semibold">Publish date:</span>  {date}</p>
                <p> <span className="text-red-500 font-semibold">Description:</span> {description.slice(0, 100)}...<Link to="/blogDetails" className="text-red-500 font-medium">Read More</Link></p>

                <div className="card-actions">
                    <Link to ="/wishlistblogs">
                        <button className="badge badge-outline text-white bg-blue-500 h-7 border-none rounded-md w-16"
                        >wishlist</button>
                    </Link>
                    <Link to = "/blogDetails">
                        <button className="badge badge-outline text-white bg-amber-500 h-7 border-none rounded-md w-16"
                        >details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default RecentBlog;