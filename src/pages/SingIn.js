import { Body, InputBox, ButtomBox, Buttom, Title, AlertMessage} from '../styles/LoginStyled'
import Loader from 'react-loader-spinner';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { postSingIn } from '../service';

export default function SingIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function logIntoAccount(){

    }

    return(
        <Body>
            <Title>
                <h1>Bem vindo ao GratiBox</h1>
            </Title>
            <InputBox>
                <input placeholder="E-mail"
                    value ={email}
                    onChange ={(e)=> setEmail(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="Senha"
                    type = "password"
                    value ={password}
                    onChange ={(e)=> setPassword(e.target.value)}
                    disabled={loading}
                />
            </InputBox>
            <ButtomBox>
                <AlertMessage>{error}</AlertMessage>
                <Buttom  onClick={loading? "": logIntoAccount}>
                    {loading?  <Loader
                                    type="ThreeDots" 
                                    color="#ffffff" 
                                    height={50} width={70} 
                            /> 
                        : "Entrar"}
                </Buttom>
                <p onClick={()=> navigate("/sing-up")}>Ainda não sou grato</p>
            </ButtomBox>
        </Body>
    );
}