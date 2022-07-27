import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledRightContainer = styled.div`
  ${media.phone`
    display: block;
    flex-direction: column;
    font-size: 0.8rem;
    width: 11rem;
  `}
`;
export default StyledRightContainer;
