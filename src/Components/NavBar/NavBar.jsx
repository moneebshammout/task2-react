import React, { useState, useEffect } from 'react';

import LogoContainer from 'Components/Logo/LogoContainer';
import Icon from 'Components/Icon/Icon';
import PhoneSideMenu from 'Components/PhoneSideMenu/PhoneSideMenu';
import Button from 'Components/Button/Button';
import SearchPanel from 'Components/SearchPanel/SearchPanel';
import DesktopMenu from 'Components/DesktopMenu/DesktopMenu';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';

import RightIconsWrapper from './Right.Wrapper.Style';
import StyledUerUtilities from './User.Utilities.Style';
import { StyledHeader, StyledNavBar } from './NavBar.Style';
import StyledLeftWrapper from './DesktopLeft.Style';
import StyledDesktopNavBar from './DesktopNav.Style';

/**
 *  Create nav bar component wrapped by a header.
 * @return {JSX}   NavBar component.
 */

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserUtilities, setShowUserUtilities] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  // desktop states
  const [showPlusDrop, setShowPlusDrop] = useState(false);
  /**
   *  listens to user scroll to hide nav bar
   * @return react APP
   */
  const listenToScroll = () => {
    const heightToHideFrom = 170;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      if (navVisible) setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   *  show or hide side menu using state on click
   * @return null
   */
  const sideMenuClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  /**
   *  show or hide user menu using state on click
   * @return null
   */
  const userUtilitiesClickHandler = () => {
    setShowUserUtilities((prevState) => !prevState);
  };
  /**
   *  show or hide search menu using state on click
   * @return null
   */
  const searchIconClickHandler = () => {
    setShowSearch((prevState) => !prevState);
  };
  const plusClickHandler = () => {
    setShowPlusDrop((prevState) => !prevState);
  };
  return (
    <>
      {navVisible && (
        <StyledHeader>
          <StyledNavBar>
            <Icon iconName="HiOutlineMenu" onClick={sideMenuClickHandler} />
            <LogoContainer logoType="phone" />
            <RightIconsWrapper>
              <Icon
                iconName="HiUser"
                onClick={userUtilitiesClickHandler}
                onBlur={userUtilitiesClickHandler}
              />
              &nbsp; &nbsp;
              <Icon
                iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
                color={showSearch ? null : 'blue'}
                onClick={searchIconClickHandler}
              />
            </RightIconsWrapper>
          </StyledNavBar>

          <StyledDesktopNavBar>
            {/* left wrapper */}
            <StyledLeftWrapper>
              <LogoContainer logoType="desktop" theme="desktopNav" />
              <DesktopMenu />
            </StyledLeftWrapper>

            {/* right wrapper */}
            <RightIconsWrapper>
              <div>
                <Icon
                  iconName="HiPlus"
                  color="white"
                  onClick={plusClickHandler}
                />
                {showPlusDrop && (
                  <DropDownMenu
                    visibility
                    content={[
                      'Cant find  a movie or tv show',
                      'login or create one',
                    ]}
                    dropType="navDrops"
                    theme="smallBlack"
                  />
                )}
              </div>
              <Button text="En" theme="language" />
              <Button text="Login" theme="smallDesktopWhite" />
              <Button text="Join TMDB" theme="smallDesktopWhite" />
              <Icon
                iconName={showSearch ? 'AiOutlineClose' : 'HiSearch'}
                color={showSearch ? null : 'blue'}
                onClick={searchIconClickHandler}
              />
            </RightIconsWrapper>
          </StyledDesktopNavBar>
        </StyledHeader>
      )}
      {showUserUtilities && (
        <StyledUerUtilities>
          <Button key="sign's in" text="Login" theme="smallGrey" />
          <Button key=" sign's out" text="Signup" theme="smallGrey" />
        </StyledUerUtilities>
      )}
      {showSearch && <SearchPanel navVisible={navVisible} />}
      <PhoneSideMenu showMenu={showMenu} />
    </>
  );
}

export default NavBar;
