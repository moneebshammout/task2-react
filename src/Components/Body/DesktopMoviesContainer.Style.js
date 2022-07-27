import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopMoviesContainer = styled.div`
  ${media.desktop`
    display: flex;
    width: 70%;
    flex-direction: row;
    box-sizing: border-box;
    height: auto;
    flex-wrap: wrap;
  `}
`;
export default StyledDesktopMoviesContainer;
