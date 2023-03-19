import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { LogIn } from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn/>} />
        <Route
          path="/mobile"
          element={
            <Protected>
              <Phone />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

function Protected({ children }) {
  const token = localStorage.getItem("token");
  return <div>{token ? children : <Navigate replace to="/" />}</div>;
}


function Phone() {
  const [mobData, setData] = useState([]);

  useEffect(() => {
    fetch("https://react-tiny-node-js.vercel.app/data")
      .then((res) => res.json())
      .then((det) => setData(det));
  }, []);

  return (
    <div className="phone-list-container">
      {mobData.map((mv, index) => (
        <Comp
          key={index}
          model={mv.model}
          image={mv.img}
          company={mv.company}
        />
      ))}
    </div>
  );
}

function Comp({ model, image, company }) {
  return (
    <div className="phone-container">
      <img className="phone-picture" src={image} alt={model} />
      <h2 className="phone-name">{model}</h2>
      <p className="phone-company">{company}</p>
    </div>
  );
}

export default App;
