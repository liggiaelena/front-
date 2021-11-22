import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Info, InfoDates, ProductsList } from '../styles/SubscribeStyled'
import { getSubscriptions } from '../service';
import nextDate from './calcDate';

export default function Plan(props){
    const [nextdays, setNextdays] = useState([]);
    const { user } = useContext(UserContext);
    let navigate = useNavigate();
    const {
        plans_name,
        delivery_days_name,
        registration_date,
        products,
    } = props.subscriptionsInfo;
    const setSubscriptionsInfo = props.setSubscriptionsInfo;

    const d = new Date(registration_date)
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

    function logout(){
        localStorage.removeItem("login");
        navigate("/")
    }
    function render(){
        const promise =  getSubscriptions(user.token)
                promise.then((res)=>{
                    setSubscriptionsInfo(res.data);
                    setNextdays(nextDate(plans_name, delivery_days_name))
                })
    }

    useEffect(()=>{
        render();
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    {nextdays?.map((n)=> {
                        let aux = new Date(n)
                        let dateNext = `${aux.getDate()}/${aux.getMonth()+1}/${aux.getFullYear()}`;
                         return (<p>{dateNext}</p>);
                    })}
                    
                </InfoDates>
                <ProductsList>
                    {products?.map((p)=> <p key={p.name}>{p.name}</p>)}
                </ProductsList>
            </PlanContainer>
            <Buttom size="250px" heigth="60px">Avaliar entregas</Buttom>
            <Buttom size="200px" heigth="60px" onClick={logout}>Deslogar</Buttom>
    </Body>
    );
}