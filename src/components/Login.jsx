import React, {useState} from "react";
import Input from "./Input";

function Login(){
    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver(){
      setMouseOver(true)
    }
    function handleMouseOut(){
      setMouseOver(false)
    }
    return (
        <div>
            <form className="form">
                <Input
                type = "text"
                placeholder = "Username"
                 />
                 <Input
                type = "password"
                placeholder = "Password"
                 />
            <button onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} type="submit" style ={{backgroundColor: isMouseOver ? "black": "white"}}>Login</button>
            </form>
        </div>
    )
}

export default Login;
