import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, B, ToggleThemeContainer } from './NavBarStyledComponent'
import { DiReact } from "react-icons/di";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import ToggleTheme from './ToggleTheme';

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
              <DiReact size="3rem" style={{color: theme.text_primary}} /> <Span>Sebastian</Span><B>Dev</B>
            </a>
          </NavLogo>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </ButtonContainer>
          <NavItems><ToggleTheme toggleTheme={toggleTheme} darkMode={darkMode} /></NavItems>
          {
              isOpen &&
              <MobileMenu isOpen={isOpen}>
                <MobileLink href="#about" onClick={() => {
                  setIsOpen(!isOpen)
                }}>About</MobileLink>
                <MobileLink href='#skills' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Skills</MobileLink>
                <MobileLink href='#experience' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Experience</MobileLink>
                <MobileLink href='#projects' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Projects</MobileLink>
                <MobileLink href='#education' onClick={() => {
                  setIsOpen(!isOpen)
                }}>Education</MobileLink>
                <ToggleThemeContainer>
            <ToggleTheme toggleTheme={toggleTheme} darkMode={darkMode} />
          </ToggleThemeContainer>
                <GitHubButton style={{ padding: '10px 16px', alignitems: 'left', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
              </MobileMenu>
          }
        </NavbarContainer>
      </Nav>
  )
}

export default Navbar