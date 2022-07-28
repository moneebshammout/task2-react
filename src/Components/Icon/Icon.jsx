import React from 'react';
import PropTypes from 'prop-types';

import {
  HiDotsCircleHorizontal,
  HiUser,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
  HiOutlineMenu,
  HiOutlineTrendingUp,
  HiPlus,
  HiQuestionMarkCircle,
  HiSearch,
} from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import StyledIcon from './Icon.Style';

const icons = {
  AiOutlineClose: <AiOutlineClose />,
  HiOutlineChevronDown: <HiOutlineChevronDown />,
  HiOutlineChevronRight: <HiOutlineChevronRight />,
  HiOutlineMenu: <HiOutlineMenu />,
  HiOutlineTrendingUp: <HiOutlineTrendingUp />,
  HiPlus: <HiPlus />,
  HiQuestion: <HiQuestionMarkCircle />,
  HiSearch: <HiSearch />,
  HiUser: <HiUser />,
  Hidots: <HiDotsCircleHorizontal />,
};

/**
 *  Create Icon component.
 * @param {object} props   Component variables.
 * @param {string} props.color Name of icon color.
 * @param {Boolean} props.hoverEffect  Gives icon hover effect.
 * @param {string} props.iconName   name of the icon.
 * @param {String} props.id  unique identifier.
 * @param {Function} props.onClick on click handler.
 * @return {JSX}  Icon.
 */

function Icon({ color, hoverEffect, iconName, id, onClick }) {
  return (
    <StyledIcon
      theme={color}
      onClick={onClick}
      id={id}
      hoverEffect={hoverEffect}
    >
      {icons[iconName]}
    </StyledIcon>
  );
}

Icon.propTypes = {
  // iconFamily: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['black', 'blue', 'grey', 'white', 'lightGrey']),
  hoverEffect: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  color: 'white',
  hoverEffect: false,
  id: '',
  onClick: null,
};

export default Icon;
