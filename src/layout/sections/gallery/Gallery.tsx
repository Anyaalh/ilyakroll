import React from 'react';
import styled from "styled-components";
import {theme} from "../../../assets/styles/Theme";
import {TitleDeskription} from "../../../components/TitleDeskription";

export const Gallery = () => {
    return (
        <StyledGallery>
            <MySectionTitle><span>Галерея</span></MySectionTitle>
            <TitleDeskription>Куча фоток Ильи-кролика</TitleDeskription>
            <Photos>
                <Ff></Ff>
                <Sf></Sf>
                <Tf></Tf>
                <Trf></Trf>
                <Fif></Fif>
            </Photos>
            <Link href={"#"}>Посмотреть все фото огородного вредителя</Link>
        </StyledGallery>
    );
};

const StyledGallery = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 50px;
`

const MySectionTitle = styled.h2`
  color: ${theme.colors.primaryFont}
  width: 100%;
  min-width: 200px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin: 100px auto 0;
  display: inline-block;
  position: relative;
  z-index: 2;
  text-transform: uppercase;

  span {
    color: ${theme.colors.accent}
  }

  &::after {
    content: "галерея";
    position: absolute;
    transform: translate(-182px, -27px) scale(2.25);
    transform-origin: center;
    color: ${theme.colors.primaryFont};
    opacity: 0.06;
    z-index: 1;
    bottom: 0;
    width: 100%;
  }
`

const Photos = styled.div`
  height: 460px;
  width: 100%;
  align-self: center;
  margin: 50px auto 0;
  
  display: grid;
  row-gap: 38px;
  column-gap: 45px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
 
    `

const Ff = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  border-radius: 10px;
  background-image: url("https://i.pinimg.com/originals/c9/75/71/c975718f28bdfabcf8d660a7a3918bba.jpg");
  background-size: cover;
  background-position: center;
    `

const Sf = styled.div`
  border-radius: 10px;
  background-image: url("https://i.pinimg.com/originals/a5/39/6a/a5396a8ae07edcd039c43d1880c7ecb0.jpg");
  background-size: cover;
  background-position: center;
    `

const Tf = styled.div`
  border-radius: 10px;
  background-image: url("https://i.pinimg.com/originals/14/7d/d1/147dd179b19ea946c9fce9ca12371eb7.jpg");
  background-size: cover;
  background-position: center;
    `

const Trf = styled.div`
  border-radius: 10px;
  background-image: url("https://abc-decor.com/img/gallery/3/thumbs/thumb_l_438.jpg");
  background-size: cover;
  background-position: center;
    `

const Fif = styled.div`
  border-radius: 10px;
  background-image: url("https://i.pinimg.com/originals/9f/96/49/9f9649c68c42c3830826f7c7166f5ef8.jpg");
  background-size: cover;
  background-position: center;
    `

const Link = styled.a`
  margin-top: 50px;
  color: ${theme.colors.accent};
  font-size: 18px;
  font-weight: 400;
`