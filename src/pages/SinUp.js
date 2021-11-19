import { Body, InputBox, ButtomBox, Buttom, Title, AlertMessage} from '../styles/LoginStyled'
// import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { postSingUp } from '../service';

export default function SingUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function checkRegistration(){
        setLoading(true);
        if(password !== confirmPassword){
            setError("Senhas precisam ser iguais")
            setLoading(false)
            return;
        }

        const body = {
            name: username,
            email,
            password,
        };

        postSingUp(body)
            .then(()=>{
                setLoading(false);
                navigate("/sing-in")
            })
            .catch((error)=>{
                setLoading(false);

                if (error.response.status === 409){
                    setError('O e-mail inserido já está cadastrado.');
                }
                else if (error.response.status === 500){
                    setError('Erro do servidor');
                }
                else if (error.response.status === 400){
                    console.log(error.response)
                    setError(error.response.data.message);
                }
            });
    }

    return(
        <Body>
            <Title>
                <h1>Bem vindo ao GratiBox</h1>
            </Title>
            <InputBox>
                <input placeholder="Nome"
                    value ={username}
                    onChange ={(e)=> setUsername(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="E-mail"
                    value ={email}
                    onChange ={(e)=> setEmail(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="Senha [min- 5 carcteres]"
                    type = "password"
                    value ={password}
                    onChange ={(e)=> setPassword(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="Confirme a senha"
                    type = "password"
                    value ={confirmPassword}
                    onChange ={(e)=> setConfirmPassword(e.target.value)}
                    disabled={loading}
                />
                <AlertMessage>
                    {error}
                </AlertMessage>
            </InputBox>
            <ButtomBox>
                <Buttom onClick={loading? "":checkRegistration}>
                    {loading?  <Loader
                                 type="ThreeDots" 
                                 color="#ffffff" 
                                 height={50} width={70} 
                           /> 
                    : "Cadastrar"}
                </Buttom>
                <p onClick={()=> navigate("/sing-in")}>Já sou grato</p>
            </ButtomBox>
        </Body>
    );
}