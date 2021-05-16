import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("  http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* this only works if the blogs array is not empty */}
      {isPending && <div> Loading... </div>}
      {error && <div>{error}</div>}

      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
