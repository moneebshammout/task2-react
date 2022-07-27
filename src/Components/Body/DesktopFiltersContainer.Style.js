import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopFiltersContainer = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
    width: 20%;
    padding-top: 1rem;
  `}
`;

export default StyledDesktopFiltersContainer;
