import { React, PropTypes, useState } from 'reuse/Packages';

import StyledCheckBox from './CheckBoxStyle';
import StyledLabel from './LabelStyle';

/**
 * @description return checkBox component
 * @param {string } label   label text
 * @param {function } firstClickHandler   special Handler for first element to show or hide others
 * @param {boolean } itemVisibility   visibility state
 * @returns {JSX}  checkBox
 */
function CheckBox({ label, firstClickHandler, itemVisibility }) {
  const [checkState, setCheckState] = useState(true);
  const toggleCheckBox = () => {
    setCheckState((prevState) => !prevState);
    if (firstClickHandler) firstClickHandler();
  };
  return (
    itemVisibility && (
      <StyledLabel
        htmlFor={label}
        onClick={toggleCheckBox}
        checked={checkState}
      >
        <StyledCheckBox name={label} checked={checkState} />
        {label}
      </StyledLabel>
    )
  );
}
CheckBox.propTypes = {
  firstClickHandler: PropTypes.func.isRequired,
  itemVisibility: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
export default CheckBox;
