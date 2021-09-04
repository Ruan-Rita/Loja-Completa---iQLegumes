import styled from 'styled-components'

export const Container = styled.div`

`
export const Image = styled.div`
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .path{
        max-height: 400px;
        display: block;
        width: 100%;
        object-fit: cover;
    }
    .title {
        position: absolute;
        padding: 20px 30px;
        width: 100%;
        background-color: #000000d4;
        h3, p {
            font-size: 1.5rem;
            color: white;
        }
        h3 {
            font-size: 2rem;
            color: #f5ff56;
            font-weight: bold;
        }
        
    }

    @media(max-width: 800px) {
        .title {
            h3, p {
                font-size: 1.2rem;
            }
            h3 {
                font-size: 1.4rem;
            }
        }
    }
    @media(max-width: 500px) {
        .title {
            padding:15px;
            h3, p {
                font-size: .8rem;
            }
            h3 {
                font-size: 1rem;
            }
        }
    }
    @media(max-width: 350px) {
        .title {
            padding: 5px 15px;
            h3, p {
                font-size: .8rem;
            }
            h3 {
                font-size: .9rem;
            }
        }
    }
    
`
