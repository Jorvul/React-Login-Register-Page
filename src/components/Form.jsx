import React, { useState } from "react";
import Input from "./Input";

function Form(){
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
             <Input
                type = "password"
                placeholder = "Confirm Password"
             />
        <button onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} type="submit" style ={{backgroundColor: isMouseOver ? "black": "white"}}>Register</button>
        </form>
    </div>
    )
}

export default Form;
