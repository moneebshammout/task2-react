import React from 'react';

import Button from 'Components/Button/Button';
import StringDropDown from 'Components/StringDropDown/StringDropDown';
import LogoContainer from 'Components/Logo/LogoContainer';

import { StyledFooter, DesktopLogo, DesktopLeftSide } from './Footer.Style';

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
      <DesktopLeftSide>
        <DesktopLogo>
          <LogoContainer logoType="phone" theme="desktopFooter" />
        </DesktopLogo>
        <Button theme="bigWhiteBlue" text="JOIN THE COMMUNITY" />
      </DesktopLeftSide>
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
