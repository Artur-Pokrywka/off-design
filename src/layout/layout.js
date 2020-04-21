import React from "react"
import PropTypes from "prop-types"

import "./reset.css"
import styled, {ThemeProvider} from "styled-components"
import theme from "../utils/theme"

const MainWrapper = styled.section`
  width: 100%;
  font-family: Montserrat;
  color: #fff;
  background: ${({theme}) => theme.colors.dark}; 
`;

const Layout = ({ children }) => (
   <ThemeProvider theme={theme}>
      <MainWrapper>
        {children}
      </MainWrapper>
   </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
