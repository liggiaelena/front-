import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Question, InfoState } from '../styles/SubscribeStyled'
import { AiOutlineArrowDown } from "react-icons/ai";
import Loader from 'react-loader-spinner';

export default function SubscribeDelivery(){
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
                <input placeholder="Nome completo"
                    value ={name}
                    onChange ={(e)=> setName(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="Endereço de entrega"
                    value ={address}
                    onChange ={(e)=> setAddress(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="CEP"
                    value ={cep}
                    onChange ={(e)=> setCep(e.target.value)}
                    disabled={loading}
                />
                <InfoState>
                    <input placeholder="Cidade"
                        value ={city}
                        onChange ={(e)=> setCity(e.target.value)}
                        disabled={loading}
                    />
                    <Question size="130px">
                    <p>{state}</p> 
                        <AiOutlineArrowDown 
                        fontSize="32px" 
                        color="#4D65A8"
                        />
                </Question>
                </InfoState>
                
            </PlanContainer>
            <Buttom onClick={()=> navigate("/subscribe")}>
            {loading?  <Loader
                                    type="ThreeDots" 
                                    color="#ffffff" 
                                    height={50} width={70} 
                            /> 
                        : "Próximo"}</Buttom>
    </Body>
    );
}