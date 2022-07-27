import React from 'react';

import Button from 'Components/Button/Button';
import StringDropDown from 'Components/StringDropDown/StringDropDown';
import LogoContainer from 'Components/Logo/LogoContainer';

import StyledFooter from './Footer.Style';
import StyledDesktopLogo from './DesktopLogo.Style';
import StyledDesktopLeftSide from './DesktopLeftSide.Style';

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

const communityContent = [
  'Guidelines',
  'Discussions',
  'Leaderboard',
  'Twitter',
];

const LegalContent = ['Terms OF Use', 'API Terms OF Use', 'Privacy Policy'];

/**
 *  Create Footer component.
 * @return {JSX}  Footer.
 */

function Footer() {
  return (
    <StyledFooter>
      <StyledDesktopLeftSide>
        <StyledDesktopLogo>
          <LogoContainer logoType="phone" theme="desktopFooter" />
        </StyledDesktopLogo>
        <Button theme="bigWhiteBlue" text="JOIN THE COMMUNITY" />
      </StyledDesktopLeftSide>
      <div>
        <Button theme="bigWhite" text="THE BASICS" />
        <StringDropDown content={basicContent} visibility />
      </div>
      <div>
        <Button theme="bigWhite" text="GET INVOLVED" />
        <StringDropDown content={involvedContent} visibility />
      </div>
      <div>
        <Button theme="bigWhite" text="COMMUNITY" />
        <StringDropDown content={communityContent} visibility />
      </div>
      <div>
        <Button theme="bigWhite" text="LEGAL" />
        <StringDropDown content={LegalContent} visibility />
      </div>
    </StyledFooter>
  );
}

export default Footer;
