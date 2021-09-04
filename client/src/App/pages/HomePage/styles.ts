import styled from 'styled-components'

export const Container = styled.div`
    background: red;
    width: 1000px;
    margin: 0px auto;
`
export const Image = styled.div`
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    .path{
        position: absolute;
        top: 0px;
        max-height: 400px;

        display: block;
        width: 100%;
        object-fit: cover;
        filter: brightness(.5);
    }
    .title {
        top: 50%;
        position: absolute;
        font-size: 2rem;
        color: white;
        background-color: antiquewhite;
    }
    
`
