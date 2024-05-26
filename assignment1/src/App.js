// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';

// const Welcome = () =>{
//   return <h1>Hello, World! gogogo</h1>;
// }

// //welcome is a component, <Welcome /> is an element
// ReactDOM.render(
//   <Welcome />, document.getElementById('root')
// );

// export default Welcome;

function IngredientsList({ input }) { //props is an object, input is a property of props
  return React.createElement(
  "ul",
  { className: "ingredients" },
  input.map((ingredient, i) =>
  React.createElement("li", { key: i }, ingredient)
  )
  );
  }
  export default IngredientsList;
  
 // the exported name is IngredientsList, but the function name is App
