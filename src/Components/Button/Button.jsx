import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.Style';

/**
 * Create Button component depending on the theme chosen.
 * @param {object} props   Component variables.
 * @param {boolean} props.disabled  Button state enabled or disabled.
 * @param {element} props.children  Button Children.
 * @param {Function} props.onClick OnClick event handler.
 * @param {Function} props.onHover OnHover event handler.
 * @param {string} props.text    Text inside the button.
 * @param {string} props.theme   Name of the theme.
 * @return {JSX}  Button component.
 */

function Button({ children, text, theme, disabled, onClick, onHover }) {
  return (
    <StyledButton
      theme={theme}
      disabled={disabled ? true : null}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseOut={onHover}
    >
      {text}
      {children}
    </StyledButton>
  );
}
Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'bigBlue',
    'bigWhite',
    'bigWhiteBlue',
    'bigWhiteFooter',
    'language',
    'smallBlack',
    'smallDesktopWhite',
    'smallFade',
    'smallDarkGrey',
    'smallWhite',
    'loadMore',
    'footerDrops',
  ]),
};
Button.defaultProps = {
  children: [],
  disabled: false,
  onClick: null,
  onHover: null,
  theme: 'bigWhite',
};

export default Button;
