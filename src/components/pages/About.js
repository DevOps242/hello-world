import React from 'react';



function About() {
  {/* When ur returning something in JSX but doesnt need a div wrap. acts as a ghost wrap.*/}
  return (

    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList App v1.0.0. It is part of a React crash course</p>
    </React.Fragment>
  );
}

export default About;
