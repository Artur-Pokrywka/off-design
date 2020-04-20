import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png" 
import styled from "styled-components"


const HeaderWrapper = styled.header`
  background: #212121;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
`;

const MainNav = styled.nav`
  display: flex;
  text-transform: uppercase;
  list-style-type: none;
`;

const NavElement = styled.li`
  margin: 0 2rem ;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #b59f7f;
    transition: 0.3s ease;
  }
  :active {
    color: #b59f7f;
  }
`;

const Logo = styled.img `
  width: 10rem;
  height: 4rem;
`;

const PageHeader = () => (
  <>
    <HeaderWrapper>
      <Logo src={logo} alt="logo"/>          
      <MainNav>
        <NavElement>
          <StyledLink to="/"> start</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/home-staging/"> home staging</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/projekty wnętrz/"> projekty wnętrz</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/kontakt/"> kontakt</StyledLink>
        </NavElement>
      </MainNav>
    </HeaderWrapper>
  </>
)

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: `off desing-wnętrza`,
}

export default PageHeader
