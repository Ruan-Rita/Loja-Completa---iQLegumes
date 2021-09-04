import React from "react";
import { Button } from "./styles";

const FormField : React.FC = (props) =>{
    return(
        <Button>
            {props.children}
        </Button>
    );
} 
export default FormField;