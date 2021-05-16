import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //runs every time page renders
  useEffect(() => {
    console.log("use effect ran");
    setTimeout(() => {
      fetch("  http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);
  //runs only if the name changes

  return (
    <div className="home">
      {/* this only works if the blogs array is not empty */}
      {isPending && <div> Loading... </div>}
      { error && <div>{error}</div>}

      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
