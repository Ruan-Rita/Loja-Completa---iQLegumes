import React from "react";
import { Formulary } from "./styles";

interface IForm{
    action: string,
    method: string,

}
const Form : React.FC<IForm> = (props) =>{
    return(
        <Formulary action={props.action} method={props.method}>
            {props.children}
        </Formulary>
    );
} 
export default Form;