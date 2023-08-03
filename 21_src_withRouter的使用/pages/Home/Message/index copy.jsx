import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from "./Detail";

export default function Message() {

  const messageArr = [
    {id:'01', title:'message001'},
    {id:'02', title:'message002'},
    {id:'03', title:'message003'}
  ]

  const navigate = useNavigate();

  const handlePushNavigate = (id, title) => {
    navigate('detail', { state: { id: id, title: title } });
  }

  const handleReplaceNavigate = (id, title) => {
    navigate('detail', { state: { id: id, title: title }, replace: true });
  }

  return (
    <div>
      <ul>
        {
          messageArr.map((msgObj)=>{
            return <li key={msgObj.id}>
              &nbsp;<button type="button" className="btn btn-light" onClick={()=>handlePushNavigate(msgObj.id, msgObj.title)}>push查看</button>
              &nbsp;<button type="button" className="btn btn-primary" onClick={()=>handleReplaceNavigate(msgObj.id, msgObj.title)}>replace查看</button>
            </li>
          })
        }
      </ul>
      <hr/>
      <Routes>
        <Route path="detail" element={<Detail/>} />
      </Routes> 
    </div>
  );
}