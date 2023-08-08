import LandingNav from "./LandingNav";
import "../css/Error.css"
import { Link } from "react-router-dom";

let ErrorPage500=()=>{
    return(
        <div>
            <LandingNav showLinks/>
            <div className="errorBody">
                <h1 className="errorType">Internal server error</h1>
                <h1 className="errorCode">5<img className="sadError" alt="sad" src={require("../images/sadError.png")}/>0</h1>
                <h1 className="errorMessage">We are working on fixing the problem. Feel free to go update your portfolio in the meantime.</h1>
                <div className="linkButtonsDiv">
                    <Link to="/" className="linkButton">Homepage</Link>
                    <button className="linkButton">Contact us</button>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage500;