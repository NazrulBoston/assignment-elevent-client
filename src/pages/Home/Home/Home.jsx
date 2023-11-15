import NewsletterSection from "../../../components/NewsletterSection";
import RecentBlogs from "../../RecentBlogs/RecentBlogs";
import Banner from "./Banner";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <div className="max-w-6xl mx-auto border-2 p-4 border-blue-200 my-6 md:my-14 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-center my-7 bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-purple-400">Newsletter Section</h1>
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;