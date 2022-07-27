import styled, { keyframes, css } from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const showKeyFrames = keyframes`
   0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
`;
const showAnimation = css`
  display: block;
  animation: ${showKeyFrames} 1s ease;
`;
const hideKeyframes = keyframes`
   0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
      display:none;
      }
`;
const hideAnimation = css`
  animation: ${hideKeyframes} 0.4s ease-out forwards;
`;
const hideMenu = css`
  display: none;
`;
const StyledPhoneMenu = styled.div`
  ${media.phone`
    flex-direction: column;
    background-color: ${colors.blue};
    width: 85%;
    height: 100%;
    padding: 0.8rem;
    margin-top: 4rem;
    position: fixed;
    ${(props) =>
      props.firstRender
        ? hideMenu
        : () => (props.showMenu ? showAnimation : hideAnimation)};
 `}
  ${media.desktop`
    display: none;
 `}
`;

export default StyledPhoneMenu;
