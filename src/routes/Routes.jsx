import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AddBlog from "../pages/AddBLog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import WishList from "../pages/WishList/WishList";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addblog",
            element:<AddBlog></AddBlog>
        },
        {
            path:"/allblogs",
            element:<AllBlogs></AllBlogs>
        },
        {
            path:"/featuredblogs",
            element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
            path:"/wishlistblogs",
            element:<WishList></WishList>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        }
       
      ]
    },
  ]);

  export default router;