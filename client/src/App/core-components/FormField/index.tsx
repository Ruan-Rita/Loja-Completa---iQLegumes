import React from "react";
import { Container } from "./styles";

interface IFormField{
    title?: string,
    placeholder?: string,
    value?: string,
    type: string,
    required: Boolean
}

const FormField : React.FC<IFormField> = (props) =>{
   

    return(
        <Container>
            {props.title && (
                <label>{props.title}</label>
            )}
            <input type={props.type} value={props.value} placeholder={props.placeholder}/>
        </Container>
    );
} 
export default FormField;