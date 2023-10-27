import styled from "styled-components";
import {theme} from "../assets/styles/Theme";



export const SectionTitle= styled.h2`
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
  
  &::after{
    content: "Обо мне";
    position: absolute;
    transform: translate(-155px, -20px) scale(2.25);
    transform-origin: center;
    color: ${theme.colors.primaryFont};
    opacity: 0.06;
    z-index: 1;
    bottom: 0;
    width: 100%;
  }
`