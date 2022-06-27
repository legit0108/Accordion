import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
   const[showInfo,setShowInfo] = useState(false);
   return (
   <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick = {()=>setShowInfo(!showInfo)}>
       {showInfo?<AiOutlineMinus></AiOutlineMinus>:<AiOutlinePlus></AiOutlinePlus>}
      </button>
    </header>
    {showInfo && <p>{info}</p>}
   </article>
   )
}
// const Question = ({id,title,info}) => {
//   const[btnFlag,setBtnFlag] = useState(false);
//   return(
//     <section className="question">
//       <div className="header">
//        <h4>{title}</h4>
//           {btnFlag===false?<AiOutlinePlus className ="btn" onClick = {()=>setBtnFlag(!btnFlag)}></AiOutlinePlus>:<AiOutlineMinus className="btn" onClick={()=>setBtnFlag(!btnFlag)}></AiOutlineMinus>}
//       </div>
//       <p>{btnFlag===true?info:''}</p>
//     </section>
//   )
// };

export default Question;
