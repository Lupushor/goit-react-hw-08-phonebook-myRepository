import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #188ce8;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms ease-in-out;
`;

export const Input = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #000;
  transition: all 250ms ease-in-out;
`;
