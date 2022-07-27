import styled from 'styled-components';
// import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const StyledInfoPopUp = styled.div`
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

export default StyledInfoPopUp;
