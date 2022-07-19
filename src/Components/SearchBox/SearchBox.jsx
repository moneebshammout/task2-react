import { React, PropTypes } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import TextField from 'Components/TextField/TextField';
import StyledSearchBox from './SearchBox.Style';
/**
 * @description return TextField component depending on the theme chosed
 * @param {String} leftIcon   Icon name to be placed at left
 * @param {String} rightIcon  Icon name to be placed at right
 * @param {string} placeHolder placeHolder
 * @returns {JSX}  TextField component
 */
function SearchBox({ leftIcon, rightIcon, placeHolder }) {
  let searchFeildController;
  /**
   * @description return TextField ref
   * @param {object} ref  text field ref oobject
   * @returns {object}  return ref
   */
  const getTextFieldRef = (ref) => {
    searchFeildController = ref;
  };
  /**
   * @description empty search text field
   * @returns {null}
   */
  const onClickRightIconHandler = () => {
    searchFeildController.current.value = '';
  };
  return (
    <StyledSearchBox>
      <>
        <Icon iconName={leftIcon} color="black" />
        <TextField
          placeHolder={placeHolder}
          forwordRefCallback={getTextFieldRef}
        />
        <Icon
          iconName={rightIcon}
          onClick={onClickRightIconHandler}
          color="grey"
        />
      </>
    </StyledSearchBox>
  );
}
SearchBox.propTypes = {
  leftIcon: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  rightIcon: PropTypes.string.isRequired,
};
export default SearchBox;
