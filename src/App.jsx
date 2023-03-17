import { useState,useEffect } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUP />} />
        <Route path="/mobile" element={ <Protected> <Phone/> </Protected>} />
      </Routes>
    </div>
  )
}

function Protected({children}){

  const token = true;
  return(
    <div>
      {token ? children : "Unauthorized entry!"}
    </div>
  )
}

function Home(){
  return(
    <div className="home">
      <h1>Welcome to the mobile app</h1>
    </div>
  )
}
 
function SignUP(){

  const style = {
    marginTop : "10px",
  }
  return(
    <form>
      <div className="container">
      <TextField sx={style} className='input' id="filled-basic" label="Username/Email" variant="filled" />
      <TextField sx={style} className='input' id="filled-basic" label="Password" variant="filled" />
      <TextField sx={style} className='input' id="filled-basic" label="Confirm password" variant="filled" />

      <Button sx={style} variant="contained">Submit</Button>
      </div>
    </form>
  )
}



function Phone() {

  const [mobData,setData] = useState([])

 useEffect(()=>{
  fetch("https://react-tiny-node-js.vercel.app/data")
  .then((res)=> res.json())
  .then((det)=> setData(det))
 },[])
   
  return (

    <div className="phone-list-container">
       {mobData.map((mv,index)=> <Comp key={index} model={mv.model} image={mv.img} company={mv.company} />)}
    </div>
  )
}


function Comp({model,image,company}){
  return(
    <div className="phone-container">
      <img className='phone-picture' src={image} alt={model} />
      <h2 className='phone-name'>{model}</h2>
      <p className='phone-company'>{company}</p>
    </div>
  )
}




export default App
