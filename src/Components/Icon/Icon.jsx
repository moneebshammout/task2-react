import React from 'react';
import PropTypes from 'prop-types';
import * as Heroicons from 'react-icons/hi';
import StyledIcon from './icon.style';

function Icon({ iconName, iconFamily }) {
  const generatedIcon = React.createElement(
    iconFamily === 'hi' ? Heroicons[iconName] : Heroicons[iconName]
  );
  return <StyledIcon>{generatedIcon}</StyledIcon>;
}
Icon.propTypes = {
  iconFamily: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
export default Icon;
