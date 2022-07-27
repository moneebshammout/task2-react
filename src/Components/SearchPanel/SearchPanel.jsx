import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from 'Components/SearchBox/SearchBox';
import TrendingDiv from './TrendingDiv/TrendingDiv';
import SearchPredictions from './SearchPredictions/SearchPredictions';

import StyledSearchPanel from './SearchPanel.Style';

const predictionsList = [
  'Jurassic World Dominion',
  'The Black Phone',
  'Lightyear',
  'Thor: Love and Thunder',
  'Resident Evil',
  'Doctor Strange  in the Multiverse Madness',
  'Stranger Things',
  'The Forgiven : Part 2. The Other One',
  'Virgin River',
];

/**
 *  Create TextField component depending on the theme chosen.
 * @param {object} props Component variables.
 * @param {bool} props.navVisible   Nav bar visibility to shift it up when invisible.
 * @return {JSX}  TextField component.
 */

function SearchPanel({ navVisible }) {
  return (
    <StyledSearchPanel navVisible={navVisible}>
      <SearchBox
        leftIcon="HiSearch"
        rightIcon="AiOutlineClose"
        placeHolder="Search"
      />
      <TrendingDiv />

      {/* if its the last give it a bottom border */}

      {predictionsList.map((pred) =>
        predictionsList.length - 1 === predictionsList.indexOf(pred) ? (
          <SearchPredictions key={pred} prediction={pred} bottomBorder />
        ) : (
          <SearchPredictions key={pred} prediction={pred} />
        )
      )}
    </StyledSearchPanel>
  );
}

SearchPanel.propTypes = {
  navVisible: PropTypes.bool.isRequired,
};

export default SearchPanel;
