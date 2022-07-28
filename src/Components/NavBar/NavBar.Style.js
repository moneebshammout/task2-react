import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const Header = styled.header`
  position: fixed;
  ${media.phone`
    background-color: ${colors.darkBlue};
    height: 4rem;
    width: 100%;
 `}
  ${media.desktop`
    position: relative;
  `}
`;
const StyledNavBar = styled.nav`
  ${media.phone`
    display: flex;
    flex-direction: row;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    :first-child {
      padding-left: 1.5rem;
    }
    overflow: hidden;
  `}
  ${media.desktop`
    display: none;
  `}
`;
const RightIconsWrapper = styled.span`
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
const UserUtilities = styled.div`
  ${media.phone`
    background-color: ${colors.white};
    bottom: 82.5%;
    left: 51.5%;
    display: block !important;
    flex-direction: column;
    position: absolute;
    width: 12rem;
    height: 6rem;
    box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem grey;
    box-shadow: rgba(0, 0, 0, 0.24) 0.1rem 0.1rem 0.1rem 0.1rem;
    justify-content: space-between;

    white-space: nowrap;
    border-radius: 0.5rem;
    > * {
      &:first-child {
        border-bottom: solid 0.001rem grey;
      }
      &:first-child:hover {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
      }
      &:nth-child(2):hover {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
      }
    }
  `}
`;
const DesktopNavBar = styled.nav`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    display: flex;
    flex-direction: row;
    height: 4rem;
    position: relative;
    align-items: center;
    justify-content: space-evenly;
  `}
`;
const DesktopLeftWrapper = styled.span`
  display: flex;
  flex-direction: row;
  width: 30rem;
  justify-content: space-between;
  padding-right: 15rem;
  z-index: 1;
  position: relative;
`;

export {
  Header,
  StyledNavBar,
  RightIconsWrapper,
  UserUtilities,
  DesktopNavBar,
  DesktopLeftWrapper,
};
