import { React, PropTypes } from 'reuse/Packages';
import StyledButton from './Button.Style';
/**
 * @description return Button component depending on the theme chosed
 * @param {string} theme   name of the theme
 * @param {string} text    text inside the button
 * @param {Function} onClick on click handler
 * @returns {JSX}  Button component
 */
function Button({ theme, onClick, text }) {
  return (
    <StyledButton theme={theme} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};
Button.defaultProps = {
  onClick: null,
};

export default Button;
