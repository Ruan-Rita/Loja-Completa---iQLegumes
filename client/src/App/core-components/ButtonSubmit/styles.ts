import styled from "styled-components";

export const Button = styled.button`

    width: 100%;
    padding: 20px 0px;
    font-size: 1.7rem;
    font-weight: bold;
    color: white;
    margin: 15px 0px;
    border-radius: 10px;
    border: none;
    background-color: #17B287;
    transition: all .3s ease-in-out;
    &:hover{
        transform: translate(10px, 0);
        filter: brightness(.9);
    }
`