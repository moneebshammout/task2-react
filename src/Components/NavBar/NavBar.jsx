import { React, useState } from 'reuse/Packages';
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
      <PhoneSideMenu showMenu={showMenu} />
      {showUserUtilities && (
        <StyledUerUtilites>
          <Button key="signuserIN" text="Login" theme="smallGrey" />
          <Button key=" signuserOUT" text="Signup" theme="smallGrey" />
        </StyledUerUtilites>
      )}
      {showSearch && <SearchPanel />}
    </>
  );
}

export default NavBar;
