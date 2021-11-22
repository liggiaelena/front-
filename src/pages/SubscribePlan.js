import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Question, Mark , MarkBox, Choose, ChooseContainer } from '../styles/SubscribeStyled'
import { AiOutlineArrowDown } from "react-icons/ai";
import { postDelivery, postSubscription } from '../service';

export default function SubscribePlan(){
    const [plan, setPlan] = useState('Plano');
    const [delivery, setDelivery] = useState('Entrega');
    const [deliveryId, setDeliveryId] = useState();
    const [planId, setPlanId] = useState();
    const [days, setDays] = useState([]);
    const [display, setDisplay] =useState(false)
    const [display2, setDisplay2] =useState(false)
    const [tea, setTea] = useState(false)
    const [incense, setIncense] = useState(false)
    const [organic, setOrganic] = useState(false)
    const { user } = useContext(UserContext);
    let navigate = useNavigate();

    function choosePlan(planChoosen){
        if(planChoosen === "mensal"){
            setPlan("Mensal")
            setDisplay(false)
        }
        if(planChoosen === "semanal"){
            setPlan("Semanal")
            setDisplay(false)
        }

        const promise = postDelivery({planName: planChoosen});
        promise.then((res)=>{
            setDays(res.data);
        })
    }

    function deliveryChoosen(name, id, plan){
        setDelivery(name)
        setDeliveryId(id)
        setPlanId(plan)
        setDisplay2(false)
    }

    function postPlan(){
        const body ={
            deliveryDayId: deliveryId,
            planId: planId,
            product1Id: tea,
            product2Id: incense,
            product3Id: organic,
        }
        console.log(body)
        const promise = postSubscription(user.token, body);
        promise.then((res)=>{
            console.log(res.data)
            navigate("/subscribe-delivery")
        })
        promise.catch((e)=>{
            console.error(e.response)
        })
    }

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
                    onClick={()=> setDisplay(!display)}
                    />
                </Question>
                <ChooseContainer display={display}>
                    <Choose onClick={()=> choosePlan('mensal')}>
                        <p>Mensal</p>
                    </Choose>
                    <Choose onClick={()=> choosePlan('semanal')}>
                        <p>Semanal</p>
                    </Choose>
                </ChooseContainer>

                <Question>
                <p>{delivery}</p> 
                    <AiOutlineArrowDown 
                    fontSize="32px" 
                    color="#4D65A8"
                    onClick={()=> setDisplay2(!display2)}
                    />
                </Question>
                <ChooseContainer display={display2}>
                    {days.map((d)=> <Choose onClick={()=> deliveryChoosen(d.name, d.id, d.plan_id)}> <p>{d.name}</p> </Choose>)}
                </ChooseContainer>
                <Mark>
                    <h2>Quero receber</h2>
                    <MarkBox>
                        <input type="checkbox" name="chas" checked={tea} onClick={()=> setTea(!tea)}/>
                        <p>Chás</p>
                        <input type="checkbox" name="incensos" checked={incense} onClick={()=> setIncense(!incense)}/>
                        <p>Incensos</p>
                        
                    </MarkBox>
                    <MarkBox>
                        <input type="checkbox" name="organicos" checked={organic} onClick={()=> setOrganic(!organic)}/>
                        <p>Produtos organicos</p>
                    </MarkBox>
                    
                </Mark>
            </PlanContainer>
            <Buttom onClick={postPlan}>Próximo</Buttom>
    </Body>
    );
}

