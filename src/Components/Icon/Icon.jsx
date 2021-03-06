import { React, PropTypes } from 'reuse/Packages';
import * as Heroicons from 'react-icons/hi';
import * as AIicons from 'react-icons/ai';
import StyledIcon from './Icon.Style';

const icons = {
  AiOutlineClose: <AIicons.AiOutlineClose />,
  HiOutlineChevronDown: <Heroicons.HiOutlineChevronDown />,
  HiOutlineChevronRight: <Heroicons.HiOutlineChevronRight />,
  HiOutlineMenu: <Heroicons.HiOutlineMenu />,
  HiOutlineTrendingUp: <Heroicons.HiOutlineTrendingUp />,
  HiQuestion: <Heroicons.HiQuestionMarkCircle />,
  HiSearch: <Heroicons.HiSearch />,
  HiUser: <Heroicons.HiUser />,
};
/**
 * @description return Icon component
 * @param {string} iconName   name of the icon
 * @param {string} color name of icon color
 * @param {Function} onClick on click handler
 * @param {String} id  unique identifier
 * @returns {JSX}  icon component
 */
function Icon({ iconName, color, onClick, id }) {
  return (
    <StyledIcon theme={color} onClick={onClick} id={id}>
      {icons[iconName]}
    </StyledIcon>
  );
}
Icon.propTypes = {
  // iconFamily: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
Icon.defaultProps = {
  color: 'white',
  id: '',
  onClick: null,
};
export default Icon;
