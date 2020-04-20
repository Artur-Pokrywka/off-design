import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./reset.css"

const MainWrapper = styled.section`
  width: 100%;
  font-family: Roboto;
  color: #fff;
  background: #212121; 
`;

const Layout = ({ children }) => (
    <MainWrapper>
      {children}
    </MainWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
