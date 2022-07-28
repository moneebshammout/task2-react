import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const StyledSearchPanel = styled.div`
  ${media.phone`
    display: block;
    font-size: 1rem;
    width: 100%;
    color: grey;
    position: fixed;
    background-color: ${colors.white};
    bottom: 42%;
    padding-bottom: 0;
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
