import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 15px 0px;
    label{

    }
    input{
        width: 100%;
        padding: 10px;
        background: transparent;
        border: 1px solid whitesmoke;
        font-size: 1.4rem;
        border-radius: 5px;
        transition: all .3s ease-in-out;
        color: whitesmoke;
        &:hover{
            &::placeholder{
                color: white;
            }
            transform: translate(10px, 0);
            filter: brightness(.9);
            background: #acbd1d;
            
        }
    }
`