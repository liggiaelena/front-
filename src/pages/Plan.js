import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Info, InfoDates, ProductsList } from '../styles/SubscribeStyled'
import { AiOutlineArrowDown } from "react-icons/ai";
import Loader from 'react-loader-spinner';

export default function Plan(){
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [cep, setCep] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("Estado")
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
                <Info>
                    <h3>Plano: </h3>
                    <p>@tipo de plano</p>
                </Info>
                <Info>
                    <h3>Plano: </h3>
                    <p>@tipo de plano</p>
                </Info>
                <InfoDates>
                    <h3>Próximas entregas: </h3>
                    <p>@tipo de plano</p>
                </InfoDates>
                <ProductsList>
                    <p>chas</p>
                    <p>Produtos organicos</p>
                    <p>Incenso</p>
                </ProductsList>
            </PlanContainer>
            <Buttom size="250px" heigth="60px" onClick={()=> navigate("/subscribe")}>Avaliar entregas</Buttom>
    </Body>
    );
}