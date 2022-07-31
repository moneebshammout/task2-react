import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const LogoContainer = styled.div`
  ${media.phone`
    width: 3rem;
    height: 4.6rem;
    display:flex;
  `}
  ${media.desktop`
    display: flex;
    ${(props) =>
      props.theme === 'desktopFooter'
        ? {
            display: 'flex',
            height: '8rem',
            width: '4rem',
          }
        : null};
    ${(props) =>
      props.theme === 'desktopNav'
        ? {
            height: '1.3rem',
            'margin-left': '1rem',
            width: '1rem',
          }
        : null};
  `}
`;

export default LogoContainer;
