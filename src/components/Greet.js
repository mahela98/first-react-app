import react from 'react';

// ---------- functional components



// function Greet(){
//     return <h1> hello punk</h1>
// }

const Greet = (props) => { 
    console.log(props);
    return <h1> Hello {props.name} </h1>
}
export default Greet;