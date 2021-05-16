import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "new web", body: "asdasd", author: "Mahela", id: "1" },
    { title: "welcome", body: "asdasd", author: "chandima", id: "2" },
    { title: "party ass", body: "asdasd", author: "Mahela", id: "3" },
  ]);

    const [name,setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //runs every time page renders
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  },[name]);
  //runs only if the name changes

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      <button onClick={()=>{setName('Mahela')}}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
