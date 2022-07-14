import React from 'react';
import { StyledHeader, StyledNavBar } from './NavBar.Style';
import Icon from '../Icon/Icon';

function NavBar() {
  return (
    <StyledHeader>
      <StyledNavBar>
        <Icon iconName="HiOutlineMenu" iconFamily="hi" />
      </StyledNavBar>
    </StyledHeader>
  );
}

export default NavBar;
