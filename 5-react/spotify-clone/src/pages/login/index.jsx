import { implicitAuth } from "../../auth/auth";
import "./style.css";

export default function Login() {
    
    return (
        <div className="login-page">
            <button onClick={implicitAuth}>Login</button>
        </div>
    )
}