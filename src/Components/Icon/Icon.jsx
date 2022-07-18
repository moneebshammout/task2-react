import { React, PropTypes } from 'reuse/Packages';
import * as Heroicons from 'react-icons/hi';
import StyledIcon from './Icon.Style';

const icons = {
  HiOutlineMenu: <Heroicons.HiOutlineMenu />,
  HiSearch: <Heroicons.HiSearch />,
  HiUser: <Heroicons.HiUser />,
};
/**
 * @description return Icon component
 * @param {string} iconName   name of the icon
 * @param {string} color name of icon color
 * @param {Function} onClick on click handler
 * @returns {JSX}  icon component
 */
function Icon({ iconName, color, onClick }) {
  return (
    <StyledIcon theme={color} onClick={onClick}>
      {icons[iconName]}
    </StyledIcon>
  );
}
Icon.propTypes = {
  // iconFamily: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Icon.defaultProps = {
  color: 'white',
  onClick: null,
};
export default Icon;
