import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const[question,setQuestions] = useState(data);
  return <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {
          questions.map((question)=>{
            return <SingleQuestion key = {question.id} {...question}></SingleQuestion>
          })
        }
      </section>
    </div>
  </main>
  // return(
      // <section className="container">
      //   <h3>Questions And Answers About Login</h3>
      //   <section>
      //     {data.map((question)=>(
      //       <SingleQuestion {...question}></SingleQuestion>
      //     ))}
      //   </section>
      // </section>
  // )
}

export default App;
