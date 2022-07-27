import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from 'Components/Icon/Icon';
import StyledFilterVisibleContent from './FilterVisibleContent.Style';

/**
 *  Create Filter visible component.
 * @param {object} props   Component variables.
 * @param {function} showHiddenContentHandler  External on click handler.
 * @param {String} title  Title text.
 * @return {JSX}  Filter visible component.
 */

function FilterDropDown({ showHiddenContentHandler, title }) {
  const [FilterDown, setFilterDown] = useState(false);
  const toggleFilterClickHandler = () => {
    setFilterDown((prevState) => !prevState);
    showHiddenContentHandler();
  };

  return (
    <StyledFilterVisibleContent onClick={toggleFilterClickHandler}>
      {title}
      <Icon
        iconName={FilterDown ? 'HiOutlineChevronDown' : 'HiOutlineChevronRight'}
        color="black"
      />
    </StyledFilterVisibleContent>
  );
}

FilterDropDown.propTypes = {
  showHiddenContentHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterDropDown;
