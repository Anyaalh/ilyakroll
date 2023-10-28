import React from 'react';
import styled from "styled-components";
import {theme} from "../../../assets/styles/Theme";

export const Testymony = () => {
    return (
        <StyledTestymony>
            <Container>
                <Qoters></Qoters>
                <Gr></Gr>
                <Fp></Fp>
                <Sp></Sp>
                <Rp></Rp>
                <Rd></Rd>
                <Text>Кролики могут поворачивать уши на 180 градусов, что позволяет им с точностью определять, откуда
                    исходит звук, а также уши важны для терморегуляции — большая площадь используется для
                    отвода лишнего тепла.</Text>
                <Fact>Интересный факт</Fact>
                <svg xmlns="http://www.w3.org/2000/svg" width="177" height="103" viewBox="0 0 177 103" fill="none">
                    <g filter="url(#filter0_d_1_480)">
                        <rect x="20" y="18.7998" width="137" height="62" rx="31" fill="white"/>
                    </g>
                    <circle cx="124" cy="49.7998" r="26" fill="#4832DC"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M121.134 58.4367C120.877 58.1565 120.877 57.702 121.134 57.4218L127.257 50.7526L121.134 44.0831C120.877 43.8028 120.877 43.3484 121.134 43.0681C121.392 42.7878 121.809 42.7878 122.066 43.0681L128.655 50.2451C128.778 50.3797 128.848 50.5623 128.848 50.7526C128.848 50.9429 128.778 51.1255 128.655 51.26L122.066 58.4367C121.809 58.717 121.392 58.717 121.134 58.4367Z"
                          fill="white"/>
                    <circle cx="53" cy="49.7998" r="26" fill="#D3D3D3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M55.907 57.4948C56.1643 57.2146 56.1643 56.7602 55.907 56.4799L49.7844 49.8107L55.907 43.1412C56.1643 42.8609 56.1643 42.4065 55.907 42.1262C55.6497 41.8459 55.2325 41.8459 54.9752 42.1262L48.3868 49.3032C48.2632 49.4378 48.1938 49.6204 48.1938 49.8107C48.1938 50.001 48.2633 50.1836 48.3868 50.3181L54.9753 57.4948C55.2325 57.7751 55.6497 57.7751 55.907 57.4948Z"
                          fill="#5E5E5E"/>
                    <defs>
                        <filter id="filter0_d_1_480" x="0" y="0.799805" width="177" height="102"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25098 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_480"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_480" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </Container>

        </StyledTestymony>
    );
};

const StyledTestymony = styled.section`
  padding: 100px 50px 50px
`

const Container = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  background-image: linear-gradient(154deg, #4832DC -11.22%, #281B7B 83.49%);
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    position: absolute;
    z-index: 1;
    bottom: -50px;
  }
`
const Qoters = styled.p`
  &:after {
    content: '"';
    color: ${theme.colors.accent};
    font-family: Passion One, sans-serif;
    font-size: 55px;
    font-weight: 400;
    text-transform: uppercase;
    width: 45px;
    height: 45px;
    background-color: ${theme.colors.primaryBg};
    border-radius: 50%;
    text-align: center;
    line-height: 75px;

    position: absolute;
    z-index: 2;
    top: 63px;
    left: 715px;
  }
`

const Fp = styled.p`
  &:after {
    content: "";
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px solid ${theme.colors.primaryBg};
    background-image: url("https://i.pinimg.com/736x/f1/ed/8b/f1ed8b9ce719c8a997d396fa1a512a32.jpg");
    background-position: center;
    background-size: cover;

    position: absolute;
    z-index: 1;
    right: 155px;
    top: -55px;

  }

`

const Gr = styled.p`
  &:after {
    content: "";
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px solid ${theme.colors.primaryBg};
    background-image: url("https://i.pinimg.com/originals/60/9d/71/609d71041f19d920bda27ab29113189c.jpg");
    background-position: center;
    background-size: cover;

    position: absolute;
    z-index: 1;
    left: 155px;
    top: -55px;
  }

`

const Sp = styled.p`

  &:after {
    content: "";
    width: 127px;
    height: 128px;
    border-radius: 50%;
    border: 5px solid ${theme.colors.primaryBg};
    background-image: url("https://rare-gallery.com/uploads/posts/965865-nature-rabbits-statue-leaves-bunny-ears.jpg");
    background-position: center;
    background-size: cover;

    position: absolute;
    z-index: 1;
    left: 420px;
    top: -64px;
  }


`

const Rp = styled.p`

  &:after {
    content: "";
    width: 127px;
    height: 128px;
    border-radius: 50%;
    border: 5px solid ${theme.colors.primaryBg};
    background-image: url("https://www.desktopbackground.org/download/1600x900/2014/12/14/870975_bunny-hd-desktop-wallpapers-widescreen-high-definition-fullscreen_1920x1200_h.jpg");
    background-position: center;
    background-size: cover;

    position: absolute;
    z-index: 1;
    right: 420px;
    top: -64px;
  }
`

const Rd = styled.p`
  &:after {
    content: "";
    width: 178px;
    height: 178px;
    border-radius: 50%;
    border: 5px solid ${theme.colors.primaryBg};
    background-image: url("https://i.pinimg.com/originals/74/93/ba/7493baa0073c3e553cb4c5cca65e6f31.jpg");
    background-position: center;
    background-size: cover;

    position: absolute;
    z-index: 1;
    left: 650px;
    top: -89px;
  }

`

const Text = styled.p`
  display: inline-block;
  max-width: 985px;
  width: 100%;
  color: ${theme.colors.primaryBg};
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  margin-top: 50px;
`

const Fact = styled.h3`
  color: ${theme.colors.primaryBg};
  font-size: 25px;
  font-weight: 700;
  margin-top: 13px;
`

