import { Formik,useFormik } from 'formik';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export function Home() {
  return (
    <div className="home">
      <h1>Welcome to the mobile app</h1>
      <LogIn/>
    </div>
  );
}

export function LogIn() {

  const formik = useFormik({
    initialValues : { username : 'a' , password : ''}
  })

  return (
    <form>
      <div className="container">
        <h1>Log In</h1>
        <TextField
          className="input"
          id="filled-basic"
          label="Username/Email"
          value={formik.values.username}
          
          variant="filled"
        />
        <TextField
          className="input"
          id="filled-basic"
          label="Password"
          value={formik.values.password}
          
          variant="filled"
        />

        <Button variant="contained">
          Log In
        </Button>
      </div>
    </form>
  );
}
