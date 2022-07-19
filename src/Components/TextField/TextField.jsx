import { React, PropTypes, useRef } from 'reuse/Packages';
import StyledTextField from './TextField.Style';
/**
 * @description return TextField component
 * @param {string} placeHolder placeHolder
 * @param {Function}  forwordRefCallback forwording ref to HOC
 * @returns {JSX}  TextField component
 */
function TextField({ placeHolder, forwordRefCallback }) {
  const ref = useRef(null);
  return (
    <StyledTextField
      placeholder={placeHolder}
      ref={ref}
      onChange={() => forwordRefCallback(ref)}
    />
  );
}
TextField.propTypes = {
  forwordRefCallback: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};
export default TextField;
