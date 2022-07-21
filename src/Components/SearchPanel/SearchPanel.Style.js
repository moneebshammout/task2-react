import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const underNav = css`
  bottom: 45%;
  padding-bottom: 0;
`;
const overrideNav = css`
  padding-bottom: 4rem;
`;
const StyledSearchBox = styled.div`
  @media (min-width: 25rem) {
    display: block;
    font-size: 1rem;
    width: 100%;
    color: grey;
    position: fixed;
    background-color: ${constants.White};
    ${(props) => (props.navVisibile ? underNav : overrideNav)};
  }
`;
export default StyledSearchBox;
