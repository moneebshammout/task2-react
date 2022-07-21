import { React, PropTypes } from 'reuse/Packages';
import StyledSelectMenu from './SelectMenuStyle';
import StyledOption from './Option.Style';
/**
 * @description return SelectMenu component
 * @param {string} title  title text
 * @param {Array} optionsList list of option to be displayed
 * @returns {JSX}  SelectMenu component
 */
function SelectMenu({ title, optionsList }) {
  return (
    <StyledSelectMenu>
      {title}
      {optionsList.map((option) => (
        <StyledOption key={option}>{option}</StyledOption>
      ))}
    </StyledSelectMenu>
  );
}
SelectMenu.propTypes = {
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default SelectMenu;
