import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import Top from "../components/Top";
import '../styles/error.css'

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <Navbar/>
        <div id="center">
          <h1>Oops!</h1>
          <p>
              <i>{error.statusText || error.message}</i>
          </p>
          <p>
            Parece que essa página não existe.
          </p>
        </div>
        <Top/>
        <Rodape/>
    </div>
  );
}

export default ErrorPage