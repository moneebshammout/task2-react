import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const DesktopDots = styled.div`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
  `}
`;
const DesktopPercentage = styled.div`
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
const MovieDropDownMenu = styled.div`
  ${media.desktop`
    position: absolute;
    top: 10%;
    left: 0%;
    font-size: 1rem;
    width: 2rem;
 `}
`;
const OverFlowContainer = styled.div`
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

const PosterContainer = styled.div`
  ${media.phone`
    display: flex;
    height: 9rem;
    min-height: 9rem;
    width: 10rem;
    min-width: 6rem;
 `}
  ${media.desktop`
    height: 16rem;
    min-height: 16rem;
    width: 11rem;
    min-width: 11rem;
    position: relative;
 `}
`;

const RightContainer = styled.div`
  ${media.phone`
    display: block;
    flex-direction: column;
    font-size: 0.8rem;
    width: 11rem;
  `}
`;

const StyledMovieCard = styled.div`
  ${media.phone`
    height: auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    border: solid 0.02rem;
    border-color: ${colors.whiteGrey};
    margin-bottom: 0.5rem;
  `}

  ${media.desktop`
    margin: 1rem;
    max-height: 20rem;
    width: 17%;
    border: none;
    :hover {
      cursor: pointer;
    }
    ${(props) =>
      props.blur
        ? {
            '-webkit-filter': `blur(0.3rem)`,
            filter: `blur(0.3rem)`,
          }
        : null};
  `}
`;
export {
  StyledMovieCard,
  RightContainer,
  PosterContainer,
  MovieDropDownMenu,
  DesktopPercentage,
  DesktopDots,
  OverFlowContainer,
};
