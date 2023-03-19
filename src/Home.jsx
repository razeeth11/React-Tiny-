import { Formik,useFormik } from 'formik';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';


export function Home() {
  return (
    <div className="home">
      <h1>Welcome to the mobile app</h1>
      <LogIn/>
    </div>
  );
}

export function LogIn() {

  const navigate = useNavigate();
  const [state,setState] = useState(true) 

  const formik = useFormik({
    initialValues : { username : '' , password : ''},
    onSubmit : async (values)=> {

      const data = await fetch("http://localhost:4222/login" ,{
        method : 'POST',
        headers : {
          "Content-type" : "application/json"
        } ,
        body : JSON.stringify(values),
      });
         const result = await data.json();

         if(result.Message == 'Successfully logged in'){
          localStorage.setItem('token' , result.token)
          navigate("/mobile")
          console.log(result.Message)
         } else {
          navigate("/")
          setState(false)
          console.log(result.Message)
         }

    }
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <h1>Log In</h1>
        <TextField
          className="input"
          id="filled-basic"
          label="Username/Email"
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
          variant="filled"
        />
        <TextField
          className="input"
          id="filled-basic"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          variant="filled"
        />

        <Button color={state ? "primary" : "error"} type="submit" variant="contained" >
          {state ? "Log In" : "Retry"}
        </Button>
      </div>
    </form>
  );
}
