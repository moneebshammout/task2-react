import { React, PropTypes } from 'reuse/Packages';
import StyledPhoneMenu from './menu.style';
/**
 * @description return Phone Side Menu component
 * @param {boolean} showMenu if true otherwise hide
 * @returns {JSX}  Phone Side Menu component
 */
function PhoneSideMenu({ showMenu }) {
  return <StyledPhoneMenu showMenu={showMenu} />;
}
PhoneSideMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};
export default PhoneSideMenu;
