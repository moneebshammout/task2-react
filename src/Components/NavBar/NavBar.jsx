import { React, useState } from 'reuse/Packages';
import LogoContainer from 'Components/Logo/LogoContainer';
import Icon from 'Components/Icon/Icon';
import PhoneSideMenu from 'Components/PhoneSideMenu/PhoneSideMenu';
import RightIconsWrapper from './Right.Wrapper.Style';
import { StyledHeader, StyledNavBar } from './NavBar.Style';

/**
 * @description show the side on icon clicked
 *
 * @return null
 */

/**
 *  @description return nav bar component wrapped by a header
 * @returns {JSX}   nav bar component
 */
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const sideMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <StyledHeader>
        <StyledNavBar>
          <Icon iconName="HiOutlineMenu" onClick={sideMenuHandler} />
          <LogoContainer />
          <RightIconsWrapper>
            <Icon iconName="HiUser" />
            &nbsp; &nbsp;
            <Icon iconName="HiSearch" color="blue" />
          </RightIconsWrapper>
        </StyledNavBar>
      </StyledHeader>
      <PhoneSideMenu showMenu={showMenu} />
    </>
  );
}

export default NavBar;
