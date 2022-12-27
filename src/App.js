import './App.css';
import Navbar from './componenets/Navbar.js'
import About from './componenets/About.js'
import Info from './componenets/Info.js'
import Projects from './componenets/Project.js'
import Footer from './componenets/Footer.js'
import Axios from "axios";
import React, { useEffect, useState } from 'react';
const baseURL = "http://127.0.0.1:7000/about";

function App() {
  const [data, setData] = useState("");
  
    const getData = () => {
        fetch("http://127.0.0.1:7000/about",{   method: 'POST',
        mode: 'no-cors',
        headers: new Headers(
           {"Content-Type": "application/json",
            "Accept":"application/json"}
        ),

     })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
                setData(data);
            });
    }
  
    useEffect(() => {
        getData();
    }, []);
  
    window.addEventListener("beforeunload", (event) => {
        getData();
        console.log("API call before page reload");
    });
  
    window.addEventListener("unload", (event) => {
        getData();
        console.log("API call after page reload");
    });
    console.log(data)
  return (
    <>
    <div className="App">
      <h1>{data}</h1>
      <Navbar/>
      
      <About/>
      <Info/>
      <Projects/>
      <Footer/>
      {/* <h1>Hii Anurag here</h1> */}
    </div>
    </>
  );
}

export default App;
