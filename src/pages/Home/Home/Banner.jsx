import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-[500px] mt-6 " style={{ backgroundImage: 'url(https://i.ibb.co/KKYJVyy/banner.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">

            </div>
            <div className="pt-[260px]  lg:pt-[360px] text-blue-300 ">
                <p className="text-2xl text-center text-white">StoryStream Company</p>
                <p className="text-4xl text-center">{`"BlogCraft: Nurturing Your Online Voice"`}</p>
               <Link to = "/login">
               <div className="text-center ">
                    <button className="btn no-underline btn-link text-white border-spacing-0.5 ">start here</button>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Banner;