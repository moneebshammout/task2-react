import { React, PropTypes, useEffect, useRef, useState } from 'reuse/Packages';
import Button from 'Components/Button/Button';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';
import StyledPhoneMenu from './menu.style';

const moviesContent = ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'];
const tvContent = ['Popular', 'Top Rated', 'On TV', 'Airing Today'];
const peopleContent = ['Popular People'];
const visibleContent = [
  'Contribution Bible',
  'Apps',
  'Discussions',
  'Leaderboard',
  'contribute',
  'API',
  'Support',
  'About',
  'Login',
];
/**
 * @description return Phone Side Menu component
 * @param {boolean} showMenu if true otherwise hide
 * @returns {JSX}  Phone Side Menu component
 */
function PhoneSideMenu({ showMenu }) {
  const [showState, setShowState] = useState({
    movies: false,

    people: false,
    tv: false,
  });
  /**
   * @description show or hide drop downs using setShowState
   * @param {String} menuName  menu unique identifier
   * @returns {null}
   */
  const dropDownHandler = (menuName) => {
    setShowState((prevState) => {
      const newData = { ...prevState, [menuName]: !prevState[menuName] };
      return newData;
    });
  };
  // preserving first render state to disable intial animation
  const firstRender = useRef(true);
  const component = (
    <StyledPhoneMenu showMenu={showMenu} firstRender={firstRender.current}>
      <Button
        theme="bigWhite"
        onClick={() => dropDownHandler('movies')}
        text="Movies"
      />
      <DropDownMenu visibility={showState.movies} content={moviesContent} />
      <Button
        theme="bigWhite"
        onClick={() => dropDownHandler('tv')}
        text="TV Shows"
      />
      <DropDownMenu visibility={showState.tv} content={tvContent} />
      <Button
        theme="bigWhite"
        onClick={() => dropDownHandler('people')}
        text="People"
      />
      <DropDownMenu visibility={showState.people} content={peopleContent} />
      <DropDownMenu visibility content={visibleContent} theme="smallFade" />
    </StyledPhoneMenu>
  );
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  });
  return component;
}
PhoneSideMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};
export default PhoneSideMenu;
