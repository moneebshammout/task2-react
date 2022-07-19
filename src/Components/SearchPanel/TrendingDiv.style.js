import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledTrendingDiv = styled.div`
  @media (min-width: 25rem) {
    font-size: 1rem;
    width: 100%;
    height: 3.2rem;
    display: flexbox;
    background-color: ${constants.Grey};
    color: ${constants.Black};
  }
`;
export default StyledTrendingDiv;
