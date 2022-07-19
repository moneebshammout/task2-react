import { React, PropTypes } from 'reuse/Packages';
import Button from 'Components/Button/Button';
import StyledDropDown from './Drop.Down.Style';

/**
 * @description return DropDown component depending on the theme chosed
 * @param {bool} visibility   show or hide menu
 * @param {arrayOf<String>} content   array of strings displayed in dropdown
 * @param {String} theme  theme type of buttons
 * @returns {JSX}  DropDown component
 */
function DropDown({ visibility, content, theme }) {
  return (
    visibility && (
      <StyledDropDown>
        {content.map((sentence) => (
          <Button key={sentence} text={sentence} theme={theme} />
        ))}
      </StyledDropDown>
    )
  );
}
DropDown.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string,
  visibility: PropTypes.bool.isRequired,
};
DropDown.defaultProps = {
  theme: 'smallWhite',
};

export default DropDown;
