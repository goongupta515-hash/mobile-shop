import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <button
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>

    </div>
  );
}

export default NotFound;