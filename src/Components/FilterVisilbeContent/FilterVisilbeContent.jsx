import { React, PropTypes, useState } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import StyledFilterVisilbeContent from './FilterVisilbeContent.Style';

/**
 * @description return Filter visible component
 * @param {String} title  title text
 * @returns {JSX}  Filter visible component
 */
function FilterDropDown({ title }) {
  const [FilterDown, setFilterDown] = useState(false);
  const toggleFilterClickHandler = () => {
    setFilterDown((prevState) => !prevState);
  };
  return (
    <StyledFilterVisilbeContent onClick={toggleFilterClickHandler}>
      {title}
      <Icon
        iconName={FilterDown ? 'HiOutlineChevronDown' : 'HiOutlineChevronRight'}
        color="black"
      />
    </StyledFilterVisilbeContent>
  );
}
FilterDropDown.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FilterDropDown;
