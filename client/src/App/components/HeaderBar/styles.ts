import styled from 'styled-components'

export const Container = styled.nav`
    width: 100%;
    background-color: #44883c;
    ul {
        max-width: 1000px;
        list-style: none;
        display: flex;
        margin: 0px auto;
        justify-content: space-between;
        padding: 0px 20px;
        align-items: center;

        li{
            height: 70px;
            display: flex;
                justify-content: center;
                align-items: center;
            a{
                text-decoration: none;
                color:white;
                font-size: 1rem;
            }
            &.logo a{
                font-size: 1.6rem;
                font-weight: bold;
                color: #f5ff56;
            }

            
        }
        div {
            display: flex;
            li {
                margin: 0px 0px 0px 10px;
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .3s ease-in-out;
                position: relative;
                a{
                    padding: 0px 5px;
                    text-align: center;
                    font-weight: bold;

                }
                &:hover{
                    filter: brightness(.9);
                    transform: scale(1.1);
                    background-color: #f5ff56;
                    a {
                        color: #44883c;
                    }
                }
            }
                
        }
    }
`