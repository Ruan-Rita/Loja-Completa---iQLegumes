import React from "react";
import { Button } from "./styles";

interface IButton{
    type: string,
}

const ButtonSubmit : React.FC<IButton> = (props) =>{
    return(
        <Button >
            {props.children}
        </Button>
    );
} 
export default ButtonSubmit;