import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  //runs every time page renders
  useEffect(() => {
    console.log("use effect ran");
    fetch("  http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  //runs only if the name changes

  return (
    <div className="home">
      {/* this only works if the blogs array is not empty */}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
