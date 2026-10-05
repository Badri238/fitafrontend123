import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import axios from 'axios';

function Child() {
  const val = useContext(ThemeContext);
  const [res, setRes] = useState({});
    const [inp, setInp] = useState(1);
  async function getApi() {
    const  {data}  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${inp}`);
    console.log(data);
    setRes(data);
  }
  useEffect(() => {
    getApi();
  }, [inp]);
  return (
    <div>
      <p>child component</p>
      <p>{val}</p>
      <p>{res.title}</p>
      <input type="text" onChange={(e)=>setInp(e.target.value)}/>
    
    </div>
  )
}

export default Child