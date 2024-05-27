import React from 'react';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div>
      <h1>welcome to 301324936</h1> <h1> KA HO HO home page</h1>
      <p>My name is Ka Ho Ho and I am a student at Centennial College.</p>
      <p>I am studying Software Engineering Technology.</p>
      <p>I am a student from Hong Kong.</p>
      <h2>My Missions</h2>
      <p>I hope to finally survive in this harsh Canada to be bullet-proof. 
        <br></br>
        With my prior medical device experience, 
        combined with programming skills to broaden my possibilities.</p>
        <Link to="/about">Click to direct to aboutme.</Link>
    </div>
  );
}

export default Home;