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
  background: ${({isDark, menuType}) =>  menuType === 'default' ? ( isDark ? theme.colors.dark : 'transparent') : theme.colors.dark};
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
    color: ${({theme}) => theme.colors.turquoise}
  }
`;

const PageHeader = ({menuType = 'default'}) => {
  const [MenuBackground, setMenuBackground] = useState(false);
  window.addEventListener('scroll', () => {
    let x = window.scrollY;
    if(x > 150 ) {
      setMenuBackground(true);
    } else {
      setMenuBackground(false);
    }
  });

  const pageNames=["start", "home-staging", "projekty-wnętrz", "kontakt"]
  
  return (
    <HeaderWrapper isDark={ MenuBackground } menuType={ menuType }>     
      <MainNav>
        {
          pageNames.map( name => 
            <NavElement key={name}>   
              <StyledLink to={name} partiallyActive={true} activeStyle={{color: theme.colors.turquoise}}>{name=name.replace("-"," ")}</StyledLink>
            </NavElement>) 
        }
      </MainNav>
    </HeaderWrapper>
)}

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: 'off desing-wnętrza',
}


export default PageHeader
