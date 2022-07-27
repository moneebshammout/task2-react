import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledOverFlowContainer = styled.div`
  ${media.phone`
    font-size: 0.8rem;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1rem; /* fallback */
    max-height: 2rem; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
 `}
  ${media.desktop`
    display: none;
  `}
`;
export default StyledOverFlowContainer;
