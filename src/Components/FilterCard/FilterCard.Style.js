import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

// import colors from 'Styles/Colors';

const StyledFilterCard = styled.div`
  ${media.phone`
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 0.2rem;
    text-indent: 1rem;
    margin-bottom: 0.2rem;
    border: 0.1rem solid #e3e3e3;
    box-shadow:0 0.1rem 0.5rem rgb(0 0 0 / 10%);
    min-width: 16rem;
    width: 22rem;
    justify-content:center;
    justify-items:center;
    border-radius: 0.4rem;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  `}
  ${media.desktop`
  `}
`;
export default StyledFilterCard;
