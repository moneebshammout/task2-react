import { React, PropTypes } from 'reuse/Packages';
import Button from 'Components/Button/Button';
import StyledStringDropDown from './String.Drop.Down.Style';
/**
 * @description return StringDropDown component depending on the theme chosed
 * @param {bool} visibility   show or hide menu
 * @param {arrayOf<String>} content   array of strings displayed in StringDropDown
 * @param {String} theme  theme type of buttons
 * @returns {JSX}  StringDropDown component
 */
function StringDropDown({ visibility, content, theme }) {
  return (
    visibility && (
      <StyledStringDropDown>
        {content.map((sentence) => (
          <Button key={sentence} text={sentence} theme={theme} />
        ))}
      </StyledStringDropDown>
    )
  );
}
StringDropDown.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string,
  visibility: PropTypes.bool.isRequired,
};
StringDropDown.defaultProps = {
  theme: 'smallWhite',
};
export default StringDropDown;
