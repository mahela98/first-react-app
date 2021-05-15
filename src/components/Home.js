const Home = () => {
  const handleClick = () => {
    console.log("hello");
  };

  const hangleclickAgain = (name) => {
    console.log('helo ' + name);
  }

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button  onClick={handleClick}>Click Me</button>
      <button onClick={ () =>{
          hangleclickAgain('khan');
      }} > Click again</button>
    </div>
  );
};

export default Home;
