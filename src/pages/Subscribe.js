import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Question, Mark } from '../styles/SubscribeStyled'
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Subscribe(){
    const [plan, setPlan] = useState('Plano');
    const [delivery, setDelivery] = useState('Entrega');
    const { user } = useContext(UserContext);
    let navigate = useNavigate();

    return (
        <Body>
        <Container>
            <h1>Bom te ver por aqui, {user.name}.</h1>
            <p>Você ainda não assinou um plano, que tal começar agora?</p>   
        </Container>
            <PlanContainer>
                <img src="../midia/image03.jpg" alt=""/>  
                <Question>
                   <p>{plan}</p> 
                    <AiOutlineArrowDown 
                    fontSize="32px" 
                    color="#4D65A8"
                    />
                </Question>
                <Question>
                <p>{delivery}</p> 
                    <AiOutlineArrowDown 
                    fontSize="32px" 
                    color="#4D65A8"
                    />
                </Question>
                <Mark>
                    
                </Mark>
            </PlanContainer>
            <Buttom onClick={()=> navigate("/subscribe")}>Próximo</Buttom>
    </Body>
    );
}

