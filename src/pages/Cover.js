import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Cover(){
    const navigate = useNavigate();

    return(
    <Body>
        <Container>
            <h1>Bem vindo ao GratiBox</h1>
            <p>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</p>
            <img src="../midia/image1.png" alt=""/>
        </Container>
        <ButtonsBox>
            <ButtomSingUp onClick={()=> navigate("/sing-up")}>Quero começar</ButtomSingUp>
            <ButtomLogIn onClick={()=> navigate("/sing-in")}>Já sou grato</ButtomLogIn>
        </ButtonsBox>
    </Body>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: auto;
  color: #fff;
  background-color: #927AE4;
    h1{
        font-weight: 700;
        font-size: 28px;
        margin-top: 50px;
        text-align: center;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        width: 70%;
        margin-top: 30px;
        text-align: center;
    }
    img{
        width: 100%;
    }

`
const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100vw;
  height: auto;
  align-items: center;

`
const ButtomSingUp = styled.div`
    background-color: #8C97EA;
    border-radius: 10px;
    font-size:18px ;
    font-weight: 700;
    width: 202px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const ButtomLogIn = styled.div`
    font-size:18px ;
    font-weight: 700;
    margin-top: 20px;

`

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #6158A9;

`
