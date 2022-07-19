import { React } from 'reuse/Packages';
import SearchBox from 'Components/SearchBox/SearchBox';
import TrendingDiv from './TrendingDiv';
import StyledSearchPanel from './SearchPanel.Style';
/**
 * @description return TextField component depending on the theme chosed
 * @param {String} leftIcon   Icon name to be placed at left
 * @param {String} rightIcon  Icon name to be placed at right
 * @param {string} placeHolder placeHolder
 * @returns {JSX}  TextField component
 */
function SearchPanel() {
  return (
    <StyledSearchPanel>
      <SearchBox
        leftIcon="HiSearch"
        rightIcon="AiOutlineClose"
        placeHolder="Search"
      />
      <TrendingDiv />
    </StyledSearchPanel>
  );
}

export default SearchPanel;
