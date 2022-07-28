import React from 'react';
import PropTypes from 'prop-types';

import StyledImage from './Image.Style';

/**
 *  Create Image component.
 * @param {object} props   Component variables.
 * @param {string} props.imagePath   Absolute path of the Image.
 * @return {JSX}  Image.
 */

function Image({ imagePath }) {
  return (
    <StyledImage>
      <img src={imagePath} alt=" not found" loading="lazy" />
    </StyledImage>
  );
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default Image;
