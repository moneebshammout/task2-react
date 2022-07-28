import styled from 'styled-components';

import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const DesktopFiltersContainer = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
    width: 20%;
    padding-top: 1rem;
  `}
`;
const DesktopMoviesContainer = styled.div`
  ${media.desktop`
    display: flex;
    width: 70%;
    flex-direction: row;
    box-sizing: border-box;
    height: auto;
    flex-wrap: wrap;
  `}
`;
const InfoPopUp = styled.div`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  box-sizing: border-box;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;
const StyledBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 1.3rem;
  padding-top: 1.2rem;
  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export {
  StyledBody,
  DesktopMoviesContainer,
  DesktopFiltersContainer,
  InfoPopUp,
};
