import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Info, InfoDates, ProductsList } from '../styles/SubscribeStyled'

function nextDate(plan, dayName){
    const nextdays =[];
    const d = new Date()
    if(plan === "mensal"){
        const day = Number(dayName.slice(-2));
        console.log(day, d.getDay())
        if(d.getDate() > day){
            const aux =new Date(`${day}/${d.getMonth()+2}/${d.getFullYear()}`)
            console.log(aux.getDay())
            nextdays.push();
        }
        else{

        }

    }
}

export default function Plan(props){
    const { user } = useContext(UserContext);
    let navigate = useNavigate();
    const {
        plans_name,
        delivery_days_name,
        registration_date,
        products,
    } = props.subscriptionsInfo;
    const d = new Date(registration_date)
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    nextDate(plans_name, delivery_days_name)

    return (
        <Body>
        <Container>
            <h1>Bom te ver por aqui, {user.name}.</h1>
            <p>“Agradecer é arte de atrair coisas boas”</p>   
        </Container>
            <PlanContainer>
                <img src="../midia/image03.jpg" alt=""/> 
                <Info>
                    <h3>Plano: </h3>
                    <p>{plans_name}</p>
                </Info>
                <Info>
                    <h3>Data da assinatura:</h3>
                    <p>{date}</p>
                </Info>
                <InfoDates>
                    <h3>Próximas entregas: </h3>
                    <p>@tipo de plano</p>
                </InfoDates>
                <ProductsList>
                    {products.map((p)=> <p>{p.name}</p>)}
                </ProductsList>
            </PlanContainer>
            <Buttom size="250px" heigth="60px" onClick={()=> navigate("/subscribe")}>Avaliar entregas</Buttom>
    </Body>
    );
}