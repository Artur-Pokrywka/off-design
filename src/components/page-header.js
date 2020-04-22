import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styled from "styled-components"
import theme from "../utils/theme"


const HeaderWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding-left: 35vw;
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${({isBlack}) => isBlack ? theme.colors.dark : 'none'};
  background: ${({menuType}) => menuType="dark" ? theme.colors.dark : 'none'};
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
    color: ${({theme}) => theme.colors.turquoise};
    transition: 0.4s ease;
  }
  :active {
    color: #000;
  }
`;

const PageHeader = ({menuType}) => {
  const [MenuBackground, setMenuBackground] = useState(false);
  window.addEventListener('scroll', () => {
    let x = window.scrollY;
    if(x > 150 ) {
      setMenuBackground(true);
    } else {
      setMenuBackground(false);
    }
  });

  return (
    <HeaderWrapper isBlack={ MenuBackground } menuType="default">     
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
)}

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: `off desing-wnętrza`,
}


export default PageHeader
