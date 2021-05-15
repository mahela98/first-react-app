import { useState } from "react";

const Home = () => {

  const [blogs,setBlogs] = useState([
    {title:'new web' ,body:'asdasd' , author:'mahela' , id: '1'},
    {title:'welcome' ,body:'asdasd' , author:'chandima' , id: '2'},
    {title:'party ass' ,body:'asdasd' , author:'siri' , id: '3'},
  ]);

  return (
    <div className="home">
      {blogs.map((blog) =>(
        <div className="blog-preview" key ={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by : {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
