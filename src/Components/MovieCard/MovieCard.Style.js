import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledMovieCard = styled.div`
  @media (min-width: 25rem) {
    height: auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    border: solid 0.02rem;
    border-color: ${constants.white_Grey};
    margin-bottom: 0.5rem;
  }
`;
export default StyledMovieCard;
