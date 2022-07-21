import { React, PropTypes } from 'reuse/Packages';
import StyledTitle from './Title.Style';
/**
 * @description return Title component
 * @param {String} title  title text
 * @returns {JSX}  Title component
 */
function Title({ title, theme }) {
  return <StyledTitle theme={theme}>{title}</StyledTitle>;
}
Title.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
