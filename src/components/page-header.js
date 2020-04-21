import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

window.addEventListener('scroll', () => {
  let x = window.scrollY;
  if(x > 100 ) {
    // HeaderWrapper.background = 'red'
  };
});

const HeaderWrapper = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding-left: 35vw;
  position: fixed;
  z-index: 1;
  // background-color: ${({isBlack}) => isBlack ? '#000' : 'none'};
`;

const MainNav = styled.nav`
  display: flex;
  list-style-type: none;
`;

const NavElement = styled.li`
  margin: 0 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: -1px;
  :hover {
    cursor: pointer;
    color: #000;
    transition: 0.4s ease;
  }
  :active {
    color: #000;
  }
`;

const PageHeader = () => (
    <HeaderWrapper>     
      <MainNav>
        <NavElement>
          <StyledLink to="/"> start</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/home-staging/"> home staging</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/projekty-wnetrz/"> projekty wnętrz</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/kontakt/"> kontakt</StyledLink>
        </NavElement>
      </MainNav>
    </HeaderWrapper>
)

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: `off desing-wnętrza`,
}


export default PageHeader
