import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  const style = {
    cursor: "pointer",
  };

  return (
    <div className="NotFound">
      <h1>Looks like you're missing</h1>
      <p sx={style} onClick={() => navigate("/")}>
        Click here to go back
      </p>
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="page-not-found.png"
      />
    </div>
  );
}
