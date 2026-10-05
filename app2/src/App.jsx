import { useEffect, useRef, useState } from 'react';
import './App.css'
import Navbar from './Navbar';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';

//App Navbar Child
function App() {
  //Lifecycle hooks
  let [a, setA] = useState("Javascript");

  useEffect(() => {
    console.log("Javascript loading");
  }, []);

  const re = useRef();

  function updateA() {
    setA("Java");
    console.log(a);
  }
  const arr = [1,2,3,4,5,6]
  return (
    <>
      <p>{a}</p>
      <ThemeContext.Provider value={a}>
          <Navbar />
          
      </ThemeContext.Provider>
      <Link to={"/home"}>Go to Navbar</Link>
      <p>Hello</p>
      <p>{a}</p>
      {arr.map((e) => (
        <>
          <p>{e}</p>
          </>
      ))}

      <input ref={re} type="text" onChange={(e)=>setA(e.target.value)} />
      <button onClick={updateA}>Update</button>
    </>
  )
}

export default App
