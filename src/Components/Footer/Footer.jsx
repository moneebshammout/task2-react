import { React } from 'reuse/Packages';
import Button from 'Components/Button/Button';
import StringDropDown from 'Components/StringDropDown/StringDropDown';
import StyledFooter from './FooterStyle';

const basicContent = [
  'About TMDB',
  'Contact Us',
  'Support Forums',
  'API',
  'System Status',
];
const involvedContent = [
  'Contribution Bible',
  'ADd new movie',
  'Add new TV show',
];
const communityContent = ['Guidlines', 'Discusions', 'Leaderboard', 'Twitter'];
const LegalContent = ['Terms OF Use', 'API Terms OF Use', 'Privacy Policy'];

/**
 * @description return Footer component
 * @returns {JSX}  Image component
 */

function Footer() {
  return (
    <StyledFooter>
      <Button theme="bigWhite" onClick={null} text="The basics" />
      <StringDropDown content={['aaa', 'bbb', 'ccc']} visibility />
    </StyledFooter>
  );
}

export default Footer;
