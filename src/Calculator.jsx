import App from "./App.jsx";
import React from "react";
import styled from 'styled-components'

const Calculadoracontainer = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin:50px auto;
border: 1px solid #ccc;
box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;
const Display = styled.div`
background: #222;
color: #fff;
font-size: 2em;
text-align: right;
padding: 20px;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
`;
const ButtonContainer = styled.div`
display: grid;
grid-template-columns:repeat(4,1fr);
`;
const Button = styled.button`
background:#f0f0f0;
border:1px;
padding: 20px;
font-size: 1.5em;
cursor: pointer;

&:hover{
  background: #ddd;
}
&:nth-child(odd){
  background: #e0e0e0;
}
&:nth-child(4n){
  background: #f0c040;
}
`;
const Calculadora = () => {
  return(
    <Calculadoracontainer>
      <Display>0</Display>
      <ButtonContainer>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>/</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>*</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button>=</Button>
      <Button>+</Button>
      </ButtonContainer>
    </Calculadoracontainer>
  )
}



export default Calculadora

