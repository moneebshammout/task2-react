import { React, useState, useEffect } from 'reuse/Packages';
import LogoContainer from 'Components/Logo/LogoContainer';
import Icon from 'Components/Icon/Icon';
import PhoneSideMenu from 'Components/PhoneSideMenu/PhoneSideMenu';
import Button from 'Components/Button/Button';
import SearchPanel from 'Components/SearchPanel/SearchPanel';
import RightIconsWrapper from './Right.Wrapper.Style';
import StyledUerUtilites from './User.Utilities.Style';
import { StyledHeader, StyledNavBar } from './NavBar.Style';

/**
 * @description return nav bar component wrapped by a header
 * @returns {JSX}   nav bar component
 */
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserUtilities, setshowUserUtilities] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [navVisibile, setNavVisibile] = useState(true);

  /**
   * @description listens to user scroll to hide nav bar
   * @returns react APP
   */
  const listenToScroll = () => {
    const heightToHideFrom = 130;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      if (navVisibile) setNavVisibile(false);
    } else {
      setNavVisibile(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * @description show or hide side menu using state on click
   * @return null
   */
  const sideMenuClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  /**
   * @description show or hide user menu using state on click
   * @return null
   */
  const userUtilitiesClickHandler = () => {
    setshowUserUtilities((prevState) => !prevState);
  };
  /**
   * @description show or hide search menu using state on click
   * @return null
   */
  const searchIconClickHandler = () => {
    setshowSearch((prevState) => !prevState);
  };
  return (
    <>
      {navVisibile && (
        <StyledHeader>
          <StyledNavBar>
            <Icon iconName="HiOutlineMenu" onClick={sideMenuClickHandler} />
            <LogoContainer />
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
        </StyledHeader>
      )}
      {showUserUtilities && (
        <StyledUerUtilites>
          <Button key="signuserIN" text="Login" theme="smallGrey" />
          <Button key=" signuserOUT" text="Signup" theme="smallGrey" />
        </StyledUerUtilites>
      )}
      {showSearch && <SearchPanel navVisibile={navVisibile} />}
      <PhoneSideMenu showMenu={showMenu} />
    </>
  );
}

export default NavBar;
