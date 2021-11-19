import styled from "styled-components";

const Body =styled.div`
    width: 100vw;
	height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
	width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
	h1{
        font-size: 28px;
        color: #ffffff;
        font-weight: 700;
    }
	
`;

const InputBox =styled.div`
    width: 100vw;
	height: auto;
    display: flex;
    flex-direction: column;
    align-items:center ;
    input{
        height: 50px;
        width: 85%;
        color: black;
        font-size: 18px;
        margin-top: 15px;
        border-radius: 5px;
        padding-left: 15px;
    }
    input::placeholder{
        color: #404040;
        font-size: 18px;
        padding-left: 3px;
        font-weight: 400;
    }
`

const ButtomBox =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 p{
        font-weight: 700;
        color: #ffffff;
        font-size: 17px;
        margin-top: 20px;
        text-decoration: none;
    }

`

const Buttom =styled.div`
    height: 56px;
    width: 240px;
    background-color: #8C97EA;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 25px;
    color: white;
    font-size: 26px;
    font-weight: 700;
`

const AlertMessage = styled.div`
	width: 97vw;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 5px;
	color: red;
	
`;

export{
    Body,
    InputBox,
    ButtomBox,
    Buttom,
    Title,
    AlertMessage
}