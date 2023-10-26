import styled from "styled-components";
import {theme} from "../assets/styles/Theme";

export const MySelection = styled.li`
  font-size: 15px;
  font-weight: 400;
  line-height: 42px;
  text-transform: uppercase;


  &:hover {
    color: ${theme.colors.accent};
    cursor: pointer;
  }
`