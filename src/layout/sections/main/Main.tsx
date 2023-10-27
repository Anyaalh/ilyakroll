import React from 'react';
import photo from "../../../assets/images/bigRabbit.jpg"
import secondPhoto from "../../../assets/images/andRabbitEating.jpg"
import thirdPhoto from "../../../assets/images/bunny.jpg"
import styled from "styled-components";
import {theme} from "../../../assets/styles/Theme";
import {MySelection} from "../../../components/Selection";
import photoP from "../../../assets/images/rabbit.png";
import photoRP from "../../../assets/images/raaaabbit.png"
import bus from "../../../assets/images/track.png"
import arrow from "../../../assets/images/Gallery Arrows.png"


export const Main = () => {

    return (
        <StyledMain>
            <Left>
                <BoxForMenu>
                    <Menu>
                        <MySelection>Кролик</MySelection>
                        <MySelection>Зайчик</MySelection>
                        <MySelection>Кролс</MySelection>
                        <MySelection>Пушистожопикс</MySelection>
                        <MySelection>Морковкоед</MySelection>
                        <MySelection>Клеверолюбитель</MySelection>
                    </Menu>
                    <BoxForPng>
                        <RabInPng src={photoP}/>
                        <RabInPng src={photoRP}/>
                        <RabInPng src={photoP}/>
                    </BoxForPng>
                </BoxForMenu>
                <PhotoWrapper>
                    <Photo src={photo} alt={"rabbit"}/>
                    <LittlePhotoBox>
                        <MinImg src={secondPhoto} alt={"rabbit"}/>
                        <MinImg src={thirdPhoto} alt={"rabbit"}/>
                    </LittlePhotoBox>
                </PhotoWrapper>
            </Left>
            <ContForText>
                <Ft>Тот самый кролс</Ft>
            </ContForText>
            <Right>
                <MainTitle>Илья знаменит своей любовью к морковке и клеверу</MainTitle>
                <Ability>
                    <MySelection>Пушистость</MySelection>
                    <MySelection>Мягкость</MySelection>
                    <MySelection>Милость</MySelection>
                </Ability>
                <BoxForBtn>
                <StyledBtn>
                    <BtnMinImg src={photoP} alt={"rabbit"}/>
                    <p>Тыкни на кролика</p>
                </StyledBtn>
                <StyledBtn>
                    <BtnMinImg src={photoP} alt={"rabbit"}/>
                    <p>Ты же кролик</p>
                </StyledBtn>
                </BoxForBtn>
                <Eml type={"text"} placeholder={"Кролик тут может написать что-то"}/>
                <SomeText>Хевоу, я кролсик</SomeText>
                <StyledBus src={bus} alt={"bus"}/>
                <ElsoText>Бус для кролика</ElsoText>
                <MyPng src={arrow} alt={"arrow"}/>
                <StyledSvg xmlns="http://www.w3.org/2000/svg" width="134" height="2" viewBox="0 0 134 2" fill="none">
                    <path d="M1.20001 1H132.7" stroke="#FFAE00" stroke-linecap="square"/>
                </StyledSvg>
                <SStyledSvg xmlns="http://www.w3.org/2000/svg" width="134" height="2" viewBox="0 0 134 2" fill="none">
                    <path d="M1.20001 1H132.7" stroke="#FFAE00" stroke-linecap="square"/>
                </SStyledSvg>
            </Right>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  height: 625px;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Menu = styled.ul`

`

const BoxForMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`
const PhotoWrapper = styled.div`
  max-width: 450px;
  height: 625px;
  position: relative;
  z-index: 1

`
const Photo = styled.img`
  width: 450px;
  height: 100%;
  object-fit: cover;;
`

const LittlePhotoBox = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 2;
`

const MinImg = styled.img`
  max-height: 50px;
  max-width: 50px;
  border-radius: 5px;
  margin-left: 5px;
  box-shadow: 5px 5px rgba(58, 58, 58, 0.8);
`
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  text-align: left;
  justify-content: space-between;
`
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  align-items: center;
  
`
const MainTitle = styled.h2`
  margin: 60px 0 20px;
  max-width: 500px;
  width: 100%;
  color: ${theme.colors.primaryFont};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
 
`

const Ability = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 20px 0 30px;

  li + li {
    margin-left: 20px;
  }

  
`
const BoxForPng = styled.div`
  height: 40px;
  margin-top: 50px;

  img + img {
    margin-left: 10px;
  }
`

const RabInPng = styled.img`
  height: 40px;
  width: 40px;
`

const StyledBtn = styled.button`
  width: 155px;
  height: 75px;
  border-radius: 10px;
  background-color: ${theme.colors.thirdlyBg};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;

  text-align: center;
  font-size: 15px;
  font-weight: 400;
  
  &:hover{
    cursor: pointer;
    background-color: ${theme.colors.accent};
    color: #FFF;
    
  }
  
`
const BtnMinImg = styled.img`
  height: 30px;
  width: 30px;
`

const BoxForBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px
`

const Eml = styled.input`
  margin-top: 40px;
  width: 330px;
  height: 45px;
  border-radius: 10px;
  background-color: ${theme.colors.thirdlyBg};
  border-color: transparent;

  color:${theme.colors.primaryFont};
  font-size: 13px;
  font-weight: 400;

  &::placeholder{
    color:${theme.colors.secondaryFont};
    padding-left: 15px;
  }
  
`

const SomeText = styled.h4`
  margin-top: 10px;
  color: ${theme.colors.accent};
  font-size: 16px;
  font-weight: 500;
`

const ContForText = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${theme.colors.secondaryBg};
  width: 290px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 520px;
  clip-path: polygon(0 0, 100% 0%, 89% 100%, 0% 100%);
`

const Ft = styled.p`
  color: ${theme.colors.primaryBg};
  font-size: 21px;
  font-weight: 500;
    `

const StyledBus = styled.img`
    position: absolute;
  top:570px;
  right: 195px;
    `

const ElsoText = styled.p`
  position: absolute;
  top: 580px;
  right: 45px;
  color: ${theme.colors.primaryFont};
  font-size: 15px;
  font-weight: 400;
`

const MyPng = styled.img`
  position: absolute;
  top:605px;
  right: 715px;
    `

const StyledSvg = styled.svg`
    position: absolute;
  top: 610px;
  right: 275px;
    `

const SStyledSvg = styled.svg`
    position: absolute;
  top: 610px;
  right: 35px;
    `