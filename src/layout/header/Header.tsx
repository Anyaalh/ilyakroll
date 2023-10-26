import React from 'react';
import styled from "styled-components";
import {theme} from "../../assets/styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Name>
                <FirstLetter>Илья</FirstLetter> Кролик
            </Name>
            <BoxForAutorisation>
                <Autorisation as={"a"} href={"#"}>Войти</Autorisation>
                <Autorisation>/</Autorisation>
                <Autorisation as={"a"} href={"#"}>Зарегистрироваться</Autorisation>
            </BoxForAutorisation>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  padding: 35px 40px 0 35px;
  display: flex;
  justify-content: space-between;
  
`

const Name = styled.h1`
  color: ${theme.colors.primaryFont},
  font-family: Nova Script, sans-serif;
  font-size: 23px;
  font-weight: 400;
  text-transform: uppercase;

`
const FirstLetter = styled.span`
  color: ${theme.colors.secondaryBg};,
font-family: Nova Script, sans-serif;
  font-size: 23px;
  font-weight: 400;
  text-transform: uppercase;
`
const Autorisation = styled.p`
  color: ${theme.colors.primaryFont};
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  display: inline-block;
  margin-left: 10px;
    `

const BoxForAutorisation = styled.div`

    `

const Link = styled.a`
    display: inline-block;
  
  &:hover{
    cursor: pointer;
  }
    `