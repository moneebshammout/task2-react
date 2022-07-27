import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Title from 'Components/Title/Title';

import StyledSelectMenu from './SelectMenuStyle';
import StyledOption from './Option.Style';
import StyledOptionContainer from './Option.Container.Style';

/**
 *  Create SelectMenu component.
 * @param {object} props Component variables.
 * @param {Array} props.optionsList List of option to be displayed
 * @param {function} props.selectMenuChangeHandler Reflects changes on the parent components.
 * @return {JSX}  SelectMenu component.
 */

function SelectMenu({ optionsList, selectMenuChangeHandler }) {
  const [selectTitle, setSelectTitle] = useState(optionsList[0]);
  const [showMenu, setShowMenu] = useState(false);

  /**
   *   Handles select menu click show or hide.
   */

  const selectMenuOnClickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  /**
   *   Handles select menu option click.
   * @param {Object} event  The  Event object.
   * @return  {null}
   */

  const optionClickHandler = (event) => {
    const optionID = event.currentTarget.id;
    setSelectTitle(optionID);
    if (optionID !== optionsList[0]) {
      selectMenuChangeHandler(optionID, true);
    } else {
      selectMenuChangeHandler(optionID, false);
    }
  };

  return (
    <StyledSelectMenu onClick={selectMenuOnClickHandler}>
      <Title title={selectTitle} theme="medium" />
      <StyledOptionContainer>
        {showMenu &&
          optionsList.map((option) => (
            <StyledOption
              key={option}
              onClick={(event) => optionClickHandler(event)}
              id={option}
              selected={selectTitle}
              content={option}
            >
              {option}
            </StyledOption>
          ))}
      </StyledOptionContainer>
    </StyledSelectMenu>
  );
}

SelectMenu.propTypes = {
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectMenuChangeHandler: PropTypes.func,
};

SelectMenu.defaultProps = {
  selectMenuChangeHandler: null,
};

export default SelectMenu;
