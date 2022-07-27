import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const blurCSS = css`
  -webkit-filter: blur(0.3rem);
  filter: blur(0.3rem);
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
    ${(props) => (props.blur ? blurCSS : null)}
  `}
`;
export default StyledMovieCard;
