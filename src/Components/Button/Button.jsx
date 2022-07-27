import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.Style';

/**
 * Create Button component depending on the theme chosen.
 * @param {object} props   Component variables.
 * @param {boolean} props.disabled  Button state enabled or disabled.
 * @param {Function} props.onClick OnClick event handler.
 * @param {Function} props.onHoverHandler OnHover event handler.
 * @param {string} props.text    Text inside the button.
 * @param {string} props.theme   Name of the theme.
 * @return {JSX}  Button component.
 */

function Button({ text, theme, disabled, onClick, onHoverHandler }) {
  if (disabled) {
    return (
      <StyledButton theme={theme} onClick={onClick} disabled>
        {text}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      theme={theme}
      onClick={onClick}
      onMouseOver={onHoverHandler}
      onMouseOut={onHoverHandler}
    >
      {text}
    </StyledButton>
  );
}
Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onHoverHandler: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};
Button.defaultProps = {
  disabled: false,
  onClick: null,
  onHoverHandler: null,
};

export default Button;
