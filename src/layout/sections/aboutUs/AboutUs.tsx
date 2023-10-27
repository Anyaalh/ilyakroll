import React from 'react';
import photo from "./../../../assets/images/bunnyCute.jpg"
import secondPhoto from "../../../assets/images/elsoRabbitEating.jpg"
import thirdPhoto from "../../../assets/images/krolik.jpg"
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TitleDeskription} from "../../../components/TitleDeskription";
import {theme} from "../../../assets/styles/Theme";


export const AboutUs = () => {
    return (
        <StyledAboutMe>
            <SectionTitle><span>Обо </span>мне</SectionTitle>
            <TitleDeskription>Я мягкий пушистый кролик Илья</TitleDeskription>
            <Container>
                <Photos>
                    <FirstPhoto/>
                    <SecondPhoto/>
                    <ThirdPhoto/>
                </Photos>
                <RabInformation>
                    <BigText>Кролики — общее название нескольких родов млекопитающих из семейства зайцевых (в том числе
                        и домашних кроликов).Кролики отличаются от зайцев альтрициальностью — их детёныши рождаются
                        слепыми, лишёнными мехового покрова, растут в норах. Зайцы, напротив, — прекоциалы: зайчата
                        появляются на свет покрытыми
                        шерстью, с открытыми глазами. Зайцы в целом больше кроликов,
                        их уши длиннее, а мех имеет чёрные отметки. Зайцы до сих пор не приручены — кролики же часто
                        выступают в качестве домашних питомцев.</BigText>
                    <Navigation>
                        <MinContainer>
                            <Number>01</Number>
                            <svg xmlns="http://www.w3.org/2000/svg" width="133" height="35" viewBox="0 0 133 35" fill="none">
                                <path d="M1 1H124.5" stroke="#808080" stroke-linecap="square" stroke-dasharray="5"/>
                                <path d="M124.5 1V26.7" stroke="#808080" stroke-linecap="square" stroke-dasharray="5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M117.21 26.8929C117.49 26.6356 117.945 26.6356 118.225 26.8929L124.894 33.0155L131.564 26.8929C131.844 26.6356 132.299 26.6356 132.579 26.8929C132.859 27.1503 132.859 27.5674 132.579 27.8247L125.402 34.4131C125.267 34.5367 125.085 34.6061 124.894 34.6061C124.704 34.6061 124.521 34.5367 124.387 34.4131L117.21 27.8246C116.93 27.5674 116.93 27.1502 117.21 26.8929Z" fill="#808080"/>
                            </svg>
                            <h6>Быстрые лапки</h6>
                            <p>Попробуйте угнаться за кроликом - никогда не догоните</p>
                        </MinContainer>
                        <MinContainer>
                            <Number bgColor={"#37D679"}>02</Number>
                            <svg xmlns="http://www.w3.org/2000/svg" width="133" height="35" viewBox="0 0 133 35" fill="none">
                                <path d="M1 1H124.5" stroke="#808080" stroke-linecap="square" stroke-dasharray="5"/>
                                <path d="M124.5 1V26.7" stroke="#808080" stroke-linecap="square" stroke-dasharray="5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M117.21 26.8929C117.49 26.6356 117.945 26.6356 118.225 26.8929L124.894 33.0155L131.564 26.8929C131.844 26.6356 132.299 26.6356 132.579 26.8929C132.859 27.1503 132.859 27.5674 132.579 27.8247L125.402 34.4131C125.267 34.5367 125.085 34.6061 124.894 34.6061C124.704 34.6061 124.521 34.5367 124.387 34.4131L117.21 27.8246C116.93 27.5674 116.93 27.1502 117.21 26.8929Z" fill="#808080"/>
                            </svg>
                            <h6>длинные ушки</h6>
                            <p>А размер кролика заканчивается там, где заканчиваются ушки?</p>
                        </MinContainer>
                        <MinContainer>
                            <Number bgColor={"#FFAE00"}>03</Number>
                            <svg xmlns="http://www.w3.org/2000/svg" width="133" height="35" viewBox="0 0 133 35" fill="none">
                                <path d="M1 1H124.5" stroke="#808080" stroke-linecap="square" stroke-dasharray="5"/>
                                <path d="M124.5 1V26.7" stroke="#808080" stroke-linecap="square" stroke-dasharray="5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M117.21 26.8929C117.49 26.6356 117.945 26.6356 118.225 26.8929L124.894 33.0155L131.564 26.8929C131.844 26.6356 132.299 26.6356 132.579 26.8929C132.859 27.1503 132.859 27.5674 132.579 27.8247L125.402 34.4131C125.267 34.5367 125.085 34.6061 124.894 34.6061C124.704 34.6061 124.521 34.5367 124.387 34.4131L117.21 27.8246C116.93 27.5674 116.93 27.1502 117.21 26.8929Z" fill="#808080"/>
                            </svg>
                            <h6>длинные прыжки</h6>
                            <p>Кто прыгает дальше: кузнечик или кролик?</p>
                        </MinContainer>
                    </Navigation>
                </RabInformation>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`


const Photos = styled.div`
  height: 320px;
  position: relative;
  padding-top: 80px;

`


const FirstPhoto = styled.div`
  background-image: url("http://images.fineartamerica.com/images-medium-large-5/white-rabbit-roeselien-raimond.jpg");
  object-fit: cover;
  background-position: center;
  width: 230px;
  height: 250px;
  border-radius: 10px;
  box-shadow: -18px 18px 50px #050404;

`

const SecondPhoto = styled.div`
  background-image: url("https://i.ytimg.com/vi/-Oqe8Rouu5M/maxresdefault.jpg");
  object-fit: cover;
  background-position: center;
  width: 175px;
  height: 190px;
  border-radius: 10px;
  box-shadow: -18px 18px 50px #050404;

  position: absolute;
  z-index: 2;
  left: 180px;
  top: 20px
`

const ThirdPhoto = styled.div`
  background-image: url("https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%BE-%D0%B8%D0%BA-32839648.jpg");
  object-fit: cover;
  background-position: center;
  width: 120px;
  height: 135px;
  border-radius: 10px;
  box-shadow: -18px 18px 50px #050404;

  position: absolute;
  z-index: 2;
  left: 220px;
  top: 230px

`


const RabInformation = styled.div`
padding-top: 50px;
`

const BigText = styled.p`
  display: inline-block;
  max-width: 750px;
  width: 100%;
  height: 168px;
  color: ${theme.colors.secondaryFont};
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
`
const MinContainer = styled.div`
  max-width: 215px;
  width: 100%;
  position: relative;
  
  svg{
    position: absolute;
    left: 55px;
    top:25px
  }

  h6{
    color: ${theme.colors.primaryFont};
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    text-transform: uppercase;
  }
  
  p:last-child{
    color: ${theme.colors.secondaryFont};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 6px;
  }
`
const Navigation = styled.div`
  display: flex;
  text-align: left;
  margin-top: 20px;
  justify-content: space-around;
`

type NumberPropsType ={
    bgColor?: string
}

const Number = styled.p <NumberPropsType>`
  color: ${theme.colors.primaryBg};
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  display: inline-block;
  position: relative;
  z-index: 99;
  height: 50px;
  width: 50px;
  padding-top: 15px;
 
  


  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.bgColor || "#2765C8"};
    color: ${theme.colors.primaryBg};
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`