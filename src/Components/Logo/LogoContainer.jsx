import React from 'react';
import PropTypes from 'prop-types';

import Image from 'Components/Image/Image';
import PhoneLogoPath from 'Assets/images/logo.jpg';
import { desktopLogo } from 'Constants/URL';

import StyledLogoContainer from './Logo.Container.Style';

/**
 *  Create Logo Container with Logo inside
 * @param {object} props   Component variables.
 * @param {String} props.logoType phone or mobile
 * @param {String} props.theme theme type
 * @return {JSX}  LogoContainer.
 */

function LogoContainer({ logoType, theme }) {
  const logo = logoType === 'phone' ? PhoneLogoPath : desktopLogo;
  return (
    <StyledLogoContainer theme={theme}>
      <Image imagePath={logo} />
    </StyledLogoContainer>
  );
}

LogoContainer.propTypes = {
  logoType: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

LogoContainer.defaultProps = {
  theme: '',
};

export default LogoContainer;
