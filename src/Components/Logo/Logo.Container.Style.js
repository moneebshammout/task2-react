import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';

const desktopNav = css`
  width: 1.5em;
  height: 1.5rem;
`;
const desktopFooter = css`
  width: 4rem;
  height: 10rem;
  display: flex;
`;
const theme = {
  desktopFooter,
  desktopNav,
};
const LogoContainer = styled.div`
  ${media.phone`
    width: 4.2rem;
    height: 4.2rem;
  `}
  ${media.desktop`
    display: flex;
    ${(props) => theme[props.theme]};
  `}
`;

export default LogoContainer;
