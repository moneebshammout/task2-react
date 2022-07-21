import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledStringDropDown = styled.div`
  @media (min-width: 25rem) {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${constants.White};
    border: none;
    padding-bottom: 1rem;
  }
`;
export default StyledStringDropDown;
