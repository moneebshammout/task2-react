import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const underNav = css`
  bottom: 45%;
  padding-bottom: 0;
`;
const overrideNav = css`
  padding-bottom: 4rem;
`;
const StyledSearchPanel = styled.div`
  ${media.phone`
    display: block;
    font-size: 1rem;
    width: 100%;
    color: grey;
    position: fixed;
    background-color: ${colors.white};
    ${(props) => (props.navVisible ? underNav : overrideNav)};
    margin-bottom: 2.5rem;
 `}
  ${media.desktop`
    width: 70%;
    padding-left: 15rem;
    padding-bottom: 3.7rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
  `}
`;
export default StyledSearchPanel;
