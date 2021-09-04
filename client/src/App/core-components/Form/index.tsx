import React from "react";
import { Button } from "./styles";

const Form : React.FC = (props) =>{
    return(
        <Button>
            {props.children}
        </Button>
    );
} 
export default Form;