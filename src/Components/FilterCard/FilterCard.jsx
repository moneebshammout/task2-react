import { React, PropTypes } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import SelectMenu from 'Components/SelectMenu/SelectMenu';
import FilterVisilbeContent from 'Components/FilterVisilbeContent/FilterVisilbeContent';
import StyledFilterCard from './FilterCard.Style';

/**
 * @description return FilterCard component
 * @param {String} title  title text
 * @returns {JSX}  FilterDropDown component
 */
function FilterCard({ title, titleTheme }) {
  return (
    <StyledFilterCard>
      <FilterVisilbeContent title="Sort" />
      <Title title={title} theme={titleTheme} />
      <SelectMenu title="title" optionsList={['one', 'two', 'three']} />
      <br />
    </StyledFilterCard>
  );
}
FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleTheme: PropTypes.string.isRequired,
};

export default FilterCard;
