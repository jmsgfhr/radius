import React from "react";
import styled from 'styled-components';

const HeaderSection = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #2b2b2b;
  margin: 0;
`;

const Title = styled.h1`
    color: #a0a0a0;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const Header = () => (
  <HeaderSection>
    <Title>Border-Radius Generator</Title>
  </HeaderSection>
);

export default Header;