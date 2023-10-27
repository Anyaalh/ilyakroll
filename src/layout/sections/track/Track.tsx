import React from 'react';
import photo from "../../../assets/images/kroliks.jpg"
import styled from "styled-components";
import {theme} from "../../../assets/styles/Theme";

export const Track = () => {
    return (
        <StyledTrack>
            <Container>
                <StyledTitle>отследите кролика</StyledTitle>
                <StyledInput type={"text"} placeholder={"Напиши ID своего кролика тут"}/>
                <MyBtn>Найти</MyBtn>
                <SmallText>Теперь ты легко можешь найти своего кролика</SmallText>
            </Container>
        </StyledTrack>
    );
};

const StyledTrack = styled.section`
  width: 100%;
  height: 415px;
  background-image: url("https://w.forfun.com/fetch/8f/8feb239abc2d99c51c669a479d14b093.jpeg");
  object-fit: cover;
  background-position: center;
  position: relative;
`

const Container = styled.div`
  width: 602px;
  height: 245px;
  flex-shrink: 0;
  background-color: rgba(72, 50, 220, 0.6);;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 40px 35px 48px;
  position: absolute;
  left: 50%;
  top: 25%
`

const StyledTitle = styled.h3`
  color: ${theme.colors.primaryBg};
  text-align: left;
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  display: flex;
  
  
  &:after{
    content: "отследите кролика";
    position: absolute;
    z-index: -1;
    transform: translate(62px,-8px) scale(1.5);
    transform-origin: center;
    opacity: 0.18;
    text-align: left;
  }
    `

const StyledInput = styled.input`
  width: 530px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${theme.colors.primaryBg};
  border: none;
  color: ${theme.colors.primaryFont};
  font-size: 15px;
  font-weight: 400;
  position: relative;
  
  &:hover{
    border: 2px solid ${theme.colors.accent};
  }
  
  
  &:focus{
    padding-left: 20px;
    outline: none;
    border: 2px solid ${theme.colors.accent};

    &::placeholder{
      padding-left: 0;
    }
  }
  
  
  &::placeholder{
    padding-left: 20px;
  }
    `

const MyBtn = styled.button`
  width: 135px;
  height: 45px;
  border-radius: 10px;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.primaryBg};
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  
  position: absolute;
  top: 102px;
  right: 45px;
  
  &:hover{
    cursor: pointer;
  }
  
  &:active{
    border: 2px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
    `

const SmallText = styled.p`
  color: ${theme.colors.primaryBg};
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
    `