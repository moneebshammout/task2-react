import { React } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';
import StyledBody from './Body.Style';
/**
 * @description return Body component 

 * @returns {JSX}  Body component
 */
function Body() {
  return (
    <StyledBody>
      <Title title="Popular Movies" theme="bold" />
      <FilterCard title="Sort Results By" titleTheme="light" />
      {/* <FilterCard title="Filters" />
      <FilterCard title="Where To Watch" /> */}
    </StyledBody>
  );
}

export default Body;
