import { Formik } from 'formik';
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
  const style = {
    marginTop: "10px",
  };
  return (
    <form>
      <div className="container">
        <TextField
          sx={style}
          className="input"
          id="filled-basic"
          label="Username/Email"
          variant="filled"
        />
        <TextField
          sx={style}
          className="input"
          id="filled-basic"
          label="Password"
          variant="filled"
        />

        <Button sx={style} variant="contained">
          Log In
        </Button>
      </div>
    </form>
  );
}
