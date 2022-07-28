import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const LogoContainer = styled.div`
  ${media.phone`
    width: 3rem;
    height: 4.6rem;
  `}
  ${media.desktop`
    display: flex;
    ${(props) =>
      props.theme === 'desktopFooter'
        ? {
            display: 'flex',
            height: '10rem',
            width: '4rem',
          }
        : null};
    ${(props) =>
      props.theme === 'desktopNav'
        ? {
            height: '1.5rem',
            width: '1.5rem',
          }
        : null};
  `}
`;

export default LogoContainer;
