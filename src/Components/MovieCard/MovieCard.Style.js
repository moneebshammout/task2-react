import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const DesktopDots = styled.div`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    display: block;
    position: absolute;
    top: 5%;
    right: 0;
    width: 2rem;
  `}
`;
const DesktopPercentage = styled.div`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
  border-radius: 50%;
  border:solid 0.3rem;
  ${(props) =>
    props.percentage <= 5
      ? {
          'border-color': 'red black black black',
        }
      : null};
${(props) =>
  props.percentage > 5
    ? {
        'border-color': 'yellow yellow yellow black',
      }
    : null};
${(props) =>
  props.percentage >= 7
    ? {
        'border-color': 'green green green black',
      }
    : null};
    position: absolute;
    display: block;
    bottom:-5%;
    left: 6%;
    background-color:black;
    width: 2rem;
    color: white;
    width: 2rem;
    height: 2rem;
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
    font-weight:400;
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
    height: 100%;
    width: 6rem;
    min-width: 6rem;
    border-color:transparent;
    border-top-left-radius:5%;
    border-bottom-left-radius:5%;
    `}
  ${media.desktop`
    height: 80%;
    width: 11.5rem;
    .poster{
      width:100%;
    }
    /* overflow:visible; */
    
    border-top-left-radius:0.5rem;
    border-top-right-radius:0.5rem;
    border-bottom-left-radius:0%;
    position: relative;
 `}
`;

const RightContainer = styled.div`
  ${media.phone`
    display: flex;
    padding: 0rem 0rem 0rem 1rem ;
    align-items: flex-start;
    flex-direction: column;
    justify-content:space-evenly;
    width: 65%;
  `}

  ${media.desktop`
    display:flex;
    flex-flow:row;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content:left;
    height:1rem;
    padding:0;
    padding-left:1rem;
    width:10rem;
  `}
`;

const StyledMovieCard = styled.div`
  ${media.phone`
    height: 8rem;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    border: 0.1rem solid #e3e3e3;
    box-shadow:0 0.1rem 0.5rem rgb(0 0 0 / 10%);
    margin-bottom: 1rem;
  `}

  ${media.desktop`
  padding-bottom:1.3rem;
   border: 0.1rem solid #e3e3e3;
    box-shadow:0 0.1rem 0.5rem rgb(0 0 0 / 10%);
    margin: 1rem 0rem 1rem 2rem;
    border-top-left-radius:1rem;
    border-top-right-radius:1rem;
    border-bottom-left-radius:0%;
    height: 22rem;
    width: 11.5rem;
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
