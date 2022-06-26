import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return(
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {data.map((question)=>(
            <SingleQuestion {...question}></SingleQuestion>
          ))}
        </section>
      </section>
  )
}

export default App;
