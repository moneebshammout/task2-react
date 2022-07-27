import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopPercentage = styled.div`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    position: absolute;
    display: block;
    bottom: -5%;
    left: 6%;
    width: 2rem;
    color: white;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: black;
    text-align: center;
    font-weight: 700;
    padding: 0.2rem;
  `}
`;
export default StyledDesktopPercentage;
