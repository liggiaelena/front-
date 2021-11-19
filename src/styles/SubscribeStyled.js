import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  color: #fff;
  background-color: #6D7CE4;

    h1{
        font-weight: 700;
        font-size: 28px;
        margin-top: 40px;
        text-align: center;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        width: 70%;
        margin: 30px 0;
        text-align: center;
    }
    
`

const PlanContainer = styled.div`
    background-color: #fff;
    width: 95vw;
    min-height: 400px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
    img{
            width: 100%;
            border-radius: 25px;
        }

`
const Question = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 8px;
    align-items: center;
    width: 80%;
    margin-top: 10px;
    background-color: #E0D1ED;
    color: #4D65A8;
    border-radius: 5px;
    height: 40px;
    
    p{
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 700;
        color:#4D65A8;
        margin-left: 18px;
    }

`
const Mark = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-top: 10px;
    background-color: #E0D1ED;
    color: #4D65A8;

`

const Buttom = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    background-color: #8C97EA;
    width: 168px;
    height: 40px;
    border-radius: 10px;
    color: #fff;
    margin-top: 17px;
    margin-bottom: 10px;

`
export{
    Buttom,
    PlanContainer,
    Container,
    Body,
    Question,
    Mark
}