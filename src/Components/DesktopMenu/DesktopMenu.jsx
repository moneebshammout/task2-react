import React, { useState } from 'react';

import Button from 'Components/Button/Button';
import DropDownMenu from 'Components/StringDropDown/StringDropDown';

import {
  moviesContent,
  tvContent,
  visibleContent,
  peopleContent,
} from 'Constants/Content';
import StyledDesktopMenu from './DesktopMenu.Style';

/**
 * Create nav bar drop downs for desktop only.
 * @return {JSX} DesktopMenu component.
 */

function DesktopMenu() {
  const [showState, setShowState] = useState({
    more: false,
    movies: false,
    people: false,
    tv: false,
  });

  /**
   *  Handles  hover event on the button to display drop down.
   * @param {string } category  Show or Hide category.
   */

  const onHoverHandler = (category) => {
    setShowState((prevState) => {
      const newData = {
        ...prevState,
        [category]: !prevState[category],
      };
      return newData;
    });
  };

  return (
    <StyledDesktopMenu>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="Movies"
          onHoverHandler={() => onHoverHandler('movies')}
        />
        {showState.movies && (
          <DropDownMenu
            visibility
            content={moviesContent}
            theme="smallBlack"
            dropType="navDrops"
          />
        )}
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="TV Shows"
          onHoverHandler={() => onHoverHandler('tv')}
        />
        {showState.tv && (
          <DropDownMenu
            visibility
            content={tvContent}
            theme="smallBlack"
            dropType="navDrops"
          />
        )}
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="People"
          onHoverHandler={() => onHoverHandler('people')}
        />
        {showState.people && (
          <DropDownMenu
            visibility
            theme="smallBlack"
            content={peopleContent}
            dropType="navDrops"
          />
        )}
      </div>
      <div>
        <Button
          theme="smallDesktopWhite"
          text="More"
          onHoverHandler={() => onHoverHandler('more')}
        />
        {showState.more && (
          <DropDownMenu
            visibility
            theme="smallBlack"
            content={visibleContent}
            dropType="navDrops"
          />
        )}
      </div>
    </StyledDesktopMenu>
  );
}
export default DesktopMenu;
