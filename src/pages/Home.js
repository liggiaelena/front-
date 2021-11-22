import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { getSubscriptions } from "../service";

export default function Home({setSubscriptionsInfo}){
    const { user } = useContext(UserContext)
    let navigate = useNavigate();

    useEffect(()=>{
        const promise = getSubscriptions(user.token)
                promise.then((res)=>{
                    setSubscriptionsInfo(res.data);
                    console.log(res.data)
                    navigate("/plan");
                })
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Body>
        <Container>
            <h1>Bom te ver por aqui, {user.name}.</h1>
            <p>Você ainda não assinou um plano, que tal começar agora?</p>
            
        </Container>
            <PlanContainer>
                <img src="../midia/image04.jpg" alt=""/>
                <p>Você recebe um box por semana.</p>   
                <p>Ideal para quem quer exercer a gratidão todos os dias.</p>
                <Buttom onClick={()=> navigate("/subscribe")}>Assinar</Buttom>
            </PlanContainer>
            <PlanContainer>
                <img src="../midia/image02.jpg" alt=""/>
                <p>Você recebe um box por mês. </p>   
                <p>Ideal para quem está começando agora.</p>
                <Buttom onClick={()=> navigate("/subscribe")}>Assinar</Buttom>
            </PlanContainer>
    </Body>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  color: #fff;
  background-color: #6D7CE4;

    h1{
        font-weight: 700;
        font-size: 28px;
        margin-top: 40px;
        text-align: center;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        width: 70%;
        margin: 30px 0;
        text-align: center;
    }
    
`

const PlanContainer = styled.div`
    background-color: #E5CDB3;
    width: 95vw;
    min-height: 400px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
    img{
            width: 100%;
            border-radius: 25px;
        }
    p{
        color: #4D65A8;
        font-size: 18px;
        font-weight: 700;
        width: 87%;
    }

`

const Buttom = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    background-color: #8C97EA;
    width: 168px;
    height: 40px;
    border-radius: 10px;
    color: #fff;
    margin-top: 17px;
    margin-bottom: 10px;

`