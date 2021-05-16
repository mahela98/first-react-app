import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "new web", body: "asdasd", author: "Mahela", id: "1" },
    { title: "welcome", body: "asdasd", author: "chandima", id: "2" },
    { title: "party ass", body: "asdasd", author: "Mahela", id: "3" },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //runs every time page renders
  useEffect(() => {
    console.log("use effect ran");
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
