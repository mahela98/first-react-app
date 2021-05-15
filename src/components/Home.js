import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs,setBlogs] = useState([
    {title:'new web' ,body:'asdasd' , author:'Mahela' , id: '1'},
    {title:'welcome' ,body:'asdasd' , author:'chandima' , id: '2'},
    {title:'party ass' ,body:'asdasd' , author:'Mahela' , id: '3'},
  ]);

  return (
    <div className="home">
      <BlogList blogs= {blogs}  title = {"All Blogs"}/>
      <BlogList blogs= {blogs.filter((blog) => blog.author==='Mahela')}  title = {"Mahela's Blogs"}/>
    </div>
  );
};

export default Home;
