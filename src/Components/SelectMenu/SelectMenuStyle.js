import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const Option = styled.div`
  min-width: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
  box-sizing: border-box;
  border: none;
  background-color: ${colors.white};

  ${(props) =>
    props.selected === props.content
      ? {
          'background-color': `${colors.whiteGrey}`,
          color: ` ${colors.black}`,
          'font-weight': '700',
        }
      : ''};
  &:hover,
  :focus {
    ${(props) =>
      props.selected === props.content
        ? {
            'background-color': `${colors.lightBlue}`,
            color: `${colors.white}`,
          }
        : null};
  }
`;
const OptionContainer = styled.div`
  width: 80%;
  max-height: 10rem;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  position: absolute;
  border: none;
  margin-top: 1.2rem;
  // TODO:Reached to option container border
  /* border: 0.01rem solid rgba(0, , 0, 12); */
  background-color: transparent;
  ${media.desktop`
    width: 15%;
    height: auto;
  `}
`;

const StyledSelectMenu = styled.ul`
  display: block;
  ${media.phone`
    width: 20rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    border-color: transparent;
    padding-left: 0.2rem;
    padding-bottom: 2rem;
    margin: 0rem 1rem 0 1rem;
    color: ${colors.black};
    &:focus,:active,:hover{
      background-color: ${colors.mediumGrey};
    }
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -3 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='10 9 12 12 14 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.1rem center;
  `}
  ${media.desktop`
    width: 80%;
  `}
`;

export { StyledSelectMenu, Option, OptionContainer };
