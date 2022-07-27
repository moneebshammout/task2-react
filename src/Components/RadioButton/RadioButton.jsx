import React from 'react';
import PropTypes from 'prop-types';

import StyledCustomRadioButton from './CustomRadioButton.Style';
import StyledLabel from './Label.Style';

/**
 *  renders a custom radio button
 * @param {object} props Component variables.
 * @param {boolean} props.checked   Check state for radio button.
 * @param {string} props.id   Unique identifier.
 * @param {string} props.label   Label for radio button.
 * @param {Function} props.onChangeHandler Handle  radio button click change.
 * @return {JSX}  RadioButton component.
 */

function RadioButton({ checked, id, label, onChangeHandler }) {
  return (
    <StyledLabel
      htmlFor="radio"
      onClick={() => onChangeHandler(id)}
      checked={checked}
      id={id}
    >
      <StyledCustomRadioButton className="checkmark" checked={checked} />
      {label}
      <br />
    </StyledLabel>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default RadioButton;
