import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    background-color: #6AF05D;
    ul {
        max-width: 1000px;
        list-style: none;
        display: flex;
        margin: 0px auto;
        justify-content: space-between;
        padding: 0px 20px;
        align-items: center;
        li{
            margin: 10px 0px;
            a{
                text-decoration: none;
                color:white;
                font-size: 1rem;
            }
            &.logo a{
                font-size: 1.rem;
                font-weight: bold;
            }
        }
    }
`