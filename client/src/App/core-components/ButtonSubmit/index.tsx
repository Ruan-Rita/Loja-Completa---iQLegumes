import React from "react";
import { Button } from "./styles";

const ButtonSubmit : React.FC = (props) =>{
    return(
        <Button>
            {props.children}
        </Button>
    );
} 
export default ButtonSubmit;