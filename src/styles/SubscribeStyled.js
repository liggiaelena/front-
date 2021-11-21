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
        margin-top: 30px;
        text-align: center;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        width: 70%;
        margin-top: 25px;
        margin-bottom: 10px;
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
    margin-top: 20px;
    img{
            width: 100%;
            border-radius: 25px;
        }
    input{
        width: 80%;
        margin-top: 10px;
        background-color: #E0D1ED;
        color: #4D65A8;
        font-weight: 700;
        font-size: 18px;
        border-radius: 5px;
        height: 40px;
    }
    input::placeholder{
        color: #4D65A8;
        font-size: 18px;
        padding-left: 15px;
        font-weight: 700;
        font-size: 18px;
    }

`
const Info = styled.div`
    display: flex;
    width: 80%;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    h3{
        color: #4D65A8;
        margin-right: 5px;
    }
    p{
        color: #E63C80;
    }

`
const ProductsList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    color:#E63C80;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`
const InfoDates = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
    h3{
        color: #4D65A8;
        margin-right: 5px;
    }
    p{
        color: #E63C80;
        margin-left: 30px;
    }

`

const InfoState = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 10px;
    justify-content: space-between;
    input{
        width: calc(100% - 140px);
        margin-right: 10px;
    }

`

const Question = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 8px;
    align-items: center;
    width: ${(props)=> props.size || "80%"};
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin-top: 10px;
    background-color: #E0D1ED;
    color: #4D65A8;
    height: auto;
    margin-bottom: 7px;
    border-radius: 5px;
    h2{
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 700;
        color:#4D65A8;
        margin-left: 16px;
        margin-top: 5px;
        margin-bottom: 7px;
    }
    

`
const MarkBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: 90%;
    margin-bottom: 3px;
    align-items: center;
    input{
        border: none;
        border-radius: 0;
        width: 19px;
        height: 19px;
        margin-left: 20px;
    }
    p{
        font-size: 18px;
        font-weight: 400;
    }
`

const Buttom = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    background-color: #8C97EA;
    width: ${(props)=> props.size || "168px"};
    height: ${(props)=> props.heigth || "40px"};
    border-radius: 10px;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;

`
export{
    Buttom,
    PlanContainer,
    Container,
    Body,
    Question,
    Mark,
    MarkBox,
    InfoState,
    Info,
    InfoDates,
    ProductsList
}