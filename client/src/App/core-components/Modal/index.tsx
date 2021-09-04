import React from "react";
import { Button } from "./styles";

const Modal : React.FC = (props) =>{
    return(
        <Button>
            {props.children}
        </Button>
    );
} 
export default Modal;