import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';

const wrapper = css`
  * {
    width: 92%;
  }
  .countryMenu {
    width: 80%;
    height: auto;
    padding-top: 2rem;
    display: block !important;
  }
`;

const StyledCountryDropDown = styled.div`
  ${media.phone`
    ${wrapper}
  `}
`;

export default StyledCountryDropDown;
