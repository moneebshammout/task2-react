import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledPosterContainer = styled.div`
  ${media.phone`
    display: flex;
    height: 9rem;
    min-height: 9rem;
    width: 10rem;
    min-width: 6rem;
 `}
  ${media.desktop`
    height: 16rem;
    min-height: 16rem;
    width: 11rem;
    min-width: 11rem;
    position: relative;
 `}
`;
export default StyledPosterContainer;
