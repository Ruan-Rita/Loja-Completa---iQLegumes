import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1000px;
    margin: 80px auto 80px auto;
    /* max-height: 100vh; */
    /* margin-top: 50%; */
    /* transform: translate(0, -50%); */
`
export const Login = styled.div`
    max-width: 700px;
    padding: 30px;
    margin: 0px auto;
    border-radius: 15px;
    background-color: #23323B;
`
export const Title = styled.h3`
    font-size: 2.5rem;
    color: #17B287;
    font-weight: bold;
    text-align: center;
    margin: 5px 0px;
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.07);
    }

`
export const GroupField = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    > div:first-child{
        margin-right: 20px;
    }

`