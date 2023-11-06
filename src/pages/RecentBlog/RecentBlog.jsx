

const RecentBlog = ({ allblog }) => {
    const { title, image, short_description, category, details_button, wishlist_button } = allblog;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge bg-blue-200">{category}</div>
                </h2>
                <p>{short_description}</p>
                <div className="card-actions">
                    <div className="badge bg-primary text-white">{details_button}</div>
                    <div className="badge bg-blue-200">{wishlist_button}</div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;