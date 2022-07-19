import { React } from 'reuse/Packages';
import Icon from 'Components/Icon/Icon';
import StyledSTrendingDiv from './TrendingDiv.style';
/**
 * @description renders trending div in search panel
 * @returns {JSX}  trending div
 */
function TrendingDiv() {
  return (
    <StyledSTrendingDiv>
      <Icon iconName="HiOutlineTrendingUp" color="Black" />
      <span>Trending</span>
    </StyledSTrendingDiv>
  );
}

export default TrendingDiv;
