import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("chandima");
  const [age, setAge] = useState(23);

  const buttonClicked = () => {
    setName("Mahela");
    setAge(32);
  };

  return (
    <div className="content">
      <h1>Home Page</h1>
      <h4>
        {name} is {age} years old.
      </h4>
      <button onClick={buttonClicked}>Click me</button>
    </div>
  );
};

export default Home;
