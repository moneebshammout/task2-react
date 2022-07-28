import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const bigWhite = css`
  font-size: 1.3rem;
  font-weight: 600;
  width: 9rem;
  height: 2.5rem;
`;
const bigWhiteBlue = css`
  font-size: 1.3rem;
  font-weight: 600;
  width: 14rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 2rem 0;
  border-radius: 0.5rem;
  color: ${colors.boldBlue};
  background-color: white;
`;
const smallFade = css`
  font-size: 1rem;
  opacity: 0.5;
  font-weight: 600;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const smallWhite = css`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const smallDesktopWhite = css`
  font-size: 1rem;
  font-weight: 600;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const smallBlack = css`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
  color: black;
`;
const smallDarkGrey = css`
  font-size: 0.8rem;
  color: black;
  font-weight: 600;
  width: 100%;
  height: 3rem;
  width: 12rem;
  text-indent: -6rem;
  display: block !important;
`;
const bigBlue = css`
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.disabled ? colors.white : colors.lightBlue};
  color: ${(props) => (props.disabled ? colors.lightGrey : colors.white)};
  width: 90%;
  height: 3rem;
  justify-content: center;
  align-items: center;
  line-height: 1rem;
  border: solid 1rem;
  border-color: transparent;
  border-radius: 1rem;
  margin: 0.5rem;
  cursor: pointer;
`;
const language = css`
  border: 0.1rem solid;
  border-color: white;
  border-radius: 0.3rem;
  :hover {
    color: ${colors.darkBlue};
    background-color: white;
  }
`;
const themes = {
  bigBlue,
  bigWhite,
  bigWhiteBlue,
  language,
  smallBlack,
  smallDarkGrey,
  smallDesktopWhite,
  smallFade,
  smallWhite,
};
const StyledButton = styled.button`
  ${media.phone`
    display: flex;
    background-color: transparent;
    color: ${colors.white};
    border: none;
    ${(props) => themes[props.theme]}
  `}
`;

export default StyledButton;
