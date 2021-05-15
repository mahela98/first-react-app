import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs,setBlogs] = useState([
    {title:'new web' ,body:'asdasd' , author:'mahela' , id: '1'},
    {title:'welcome' ,body:'asdasd' , author:'chandima' , id: '2'},
    {title:'party ass' ,body:'asdasd' , author:'siri' , id: '3'},
  ]);

  return (
    <div className="home">
      <BlogList blogs= {blogs}  title = {"All Blogs"}/>
    </div>
  );
};

export default Home;
