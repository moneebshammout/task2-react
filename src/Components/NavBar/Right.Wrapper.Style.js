import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledRightWrapper = styled.span`
  ${media.phone`
    display: flex;
    flex-direction: row;
    :last-child {
      padding-right: 1.5rem;
    }
 `}
  ${media.desktop`
    :last-child {
      padding-right: 0;
    }
    width: 20rem;
    justify-content: space-between;
 `}
`;

export default StyledRightWrapper;
