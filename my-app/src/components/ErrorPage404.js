import LandingNav from "./LandingNav";
import "../css/Error.css"
import { Link } from "react-router-dom";

let ErrorPage404=()=>{
    return(
        <div>
            <LandingNav showLinks/>
            <div className="errorBody">
                <h1 className="errorType">Page not found</h1>
                <h1 className="errorCode">4<img className="sadError" alt="sad" src={require("../images/sadError.png")}/>4</h1>
                <h1 className="errorMessage">The page you are looking for was moved, removed, renamed, or might have never existed.</h1>
                <div className="linkButtonsDiv">
                    <Link to="/" className="linkButton">Homepage</Link>
                    <button className="linkButton">Contact us</button>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage404;