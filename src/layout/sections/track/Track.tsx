import React from 'react';
import photo from "../../../assets/images/kroliks.jpg"
import styled from "styled-components";
import {theme} from "../../../assets/styles/Theme";

export const Track = () => {
    return (
        <StyledTrack>
            <Container>
                <h3>TRACK YOUR PRODUCT</h3>
                <input type={"text"}/>
                <button>Track</button>
                <p>Now you can track your Order easily</p>
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
  height: 243px;
  flex-shrink: 0;
  background-color: ${theme.colors.accent};
  border-radius: 15px;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  padding: 40px 35px 48px;
  position: absolute;
  left: 50%;
  top:25%
`