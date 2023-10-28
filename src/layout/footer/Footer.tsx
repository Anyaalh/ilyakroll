import React from 'react';
import styled from "styled-components";
import {theme} from "../../assets/styles/Theme";
import pay from "../../assets/images/payment_icons.png"

export const Footer = () => {
    return (
        <StyledFooter>
            <Right>
                <p>© Кролик 2023, Вся правда выяснена</p>
            </Right>
            <Left>
                <Quest>?</Quest>
                <p>Помощь</p>
                <img src={pay} alt={"pay"}/>
            </Left>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 0 100px;
  background-color: #10093B;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`

const Right = styled.div`
  p {
    color: ${theme.colors.primaryBg};
    text-align: right;
    font-size: 12px;
    font-weight: 300;
  }
`


const Left = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;


  p {
    color: ${theme.colors.secondaryBg};
    font-size: 14px;
    font-weight: 300;
  }
`

const Quest = styled.div`
  height: 22px;
  width: 22px;
  color: ${theme.colors.primaryBg};
  background-color: ${theme.colors.secondaryBg};
  border-radius: 50%;
  text-align: center;
`
