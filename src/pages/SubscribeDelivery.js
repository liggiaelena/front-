import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {Buttom, PlanContainer, Container, Body, Question, InfoState, Choose, ChooseContainer, DisplayFlex } from '../styles/SubscribeStyled'
import { AiOutlineArrowDown } from "react-icons/ai";
import Loader from 'react-loader-spinner';
import { getStates, postSubscribe } from '../service';

export default function SubscribeDelivery(){
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] =useState(false)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [cep, setCep] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("Estado")
    const [stateId, setStateId] = useState();
    const [states, setStates] = useState([])
    const { user } = useContext(UserContext);
    let navigate = useNavigate();

    function deliveryInfo(){
        setLoading(true)
        const body ={
            fullName: name,
            address,
            cep,
            city,
            stateId,
        }
        const promise = postSubscribe(user.token, body);
        promise.then(()=>{
            navigate("/plan")
        })
        promise.catch((e)=>{
            console.log(e.response)
            setLoading(false)
        })
    }

    function stateChoosen(name, id){
        setState(name)
        setStateId(id)
        setDisplay(false)
    }

    useEffect(()=>{
        const promise = getStates();
        promise.then((res)=>{
            setStates(res.data);
        })
    },[])

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
                    <DisplayFlex>
                         <Question size="130px">
                            <p>{state}</p> 
                                <AiOutlineArrowDown 
                                fontSize="32px" 
                                color="#4D65A8"
                                onClick={()=> setDisplay(!display)}
                                />
                        </Question>
                        <ChooseContainer display={display} width={true}>
                            {states.map((s)=> <Choose onClick={()=> stateChoosen(s.initials, s.id)}> <p>{s.initials}</p> </Choose>)}
                        </ChooseContainer>
                    </DisplayFlex>
                </InfoState>
                
            </PlanContainer>
            <Buttom onClick={deliveryInfo}>
            {loading?  <Loader
                                    type="ThreeDots" 
                                    color="#ffffff" 
                                    height={50} width={70} 
                            /> 
                        : "Próximo"}</Buttom>
    </Body>
    );
}