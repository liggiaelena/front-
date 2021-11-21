import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Question, Mark , MarkBox } from '../styles/SubscribeStyled'
import { AiOutlineArrowDown } from "react-icons/ai";

export default function SubscribePlan(){
    const [plan, setPlan] = useState('Plano');
    const [delivery, setDelivery] = useState('Entrega');
    const [tea, setTea] = useState(false)
    const [incense, setIncense] = useState(false)
    const [organic, setOrganic] = useState(false)
    const { user } = useContext(UserContext);
    let navigate = useNavigate();

    return (
        <Body>
        <Container>
            <h1>Bom te ver por aqui, {user.name}.</h1>
            <p>“Agradecer é arte de atrair coisas boas”</p>   
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
                    <h2>Quero receber</h2>
                    <MarkBox>
                        <input type="checkbox" name="chas" checked={false}/>
                        <p>Chás</p>
                        <input type="checkbox" name="incens0s" checked={false}/>
                        <p>Incensos</p>
                        
                    </MarkBox>
                    <MarkBox>
                        <input type="checkbox" name="organicos" checked={false}/>
                        <p>Produtos organicos</p>
                    </MarkBox>
                    
                </Mark>
            </PlanContainer>
            <Buttom onClick={()=> navigate("/subscribe-delivery")}>Próximo</Buttom>
    </Body>
    );
}

