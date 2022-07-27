import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button/Button';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';

import {
  moviesContent,
  tvContent,
  visibleContent,
  peopleContent,
} from 'Constants/Content';
import StyledPhoneMenu from './menu.style';

/**
 *  Create Phone Side Menu component.
 * @param {object} props Component variables.
 * @param {boolean} props.showMenu if true otherwise hide.
 * @return {JSX}  PhoneSideMenu component.
 */

function PhoneSideMenu({ showMenu }) {
  const [showState, setShowState] = useState({
    movies: false,
    people: false,
    tv: false,
  });

  /**
   * Show or hide drop downs using setShowState.
   * @param {String} menuName  Menu unique identifier.
   */

  const dropDownHandler = (menuName) => {
    setShowState((prevState) => {
      const newData = { ...prevState, [menuName]: !prevState[menuName] };
      return newData;
    });
  };

  // TODO: preserving first render state to disable initial animation

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
