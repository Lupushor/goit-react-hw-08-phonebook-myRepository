import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

export const Button = styled.button`
  @media screen and (min-width: 320px) {
    padding: 5px;

    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px;

    font-size: 16px;
  }

  margin-left: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;

  text-decoration: none;

  background-color: #157c11;
  color: #ffffff;

  border-radius: 4px;
  border: transparent;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #000;
  transition: all 250ms ease-in-out;
`;
