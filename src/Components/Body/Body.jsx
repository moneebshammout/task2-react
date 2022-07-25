/* eslint-disable react-hooks/exhaustive-deps */
import fetchMovies from 'service/movies.service';
import { React, useState, useEffect } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';
import SelectMenu from 'Components/SelectMenu/SelectMenu';
import Icon from 'Components/Icon/Icon';
import RadioButton from 'Components/RadioButton/RadionButton';
import CheckBox from 'Components/CheckBox/CheckBox';
import MovieCard from 'Components/MovieCard/MovieCard';
import CountryDropDown from 'Components/CountryDropDown/CountryDropDown';
import Button from 'Components/Button/Button';
import StyledInfoPopUp from './InfoPopUp.Style';
import StyledBody from './Body.Style';

// name and query
const sortMap = {
  'Popularity Ascending': 'popularity.asc',
  'Popularity descending': 'popularity.desc',
  'Rating Ascending': 'rating.asc',
  'Rating descending': 'rating.desc',
  'Release Date Ascending': 'primary_release_date.asc',
  'Release Date descending': 'primary_release_date.desc',
  'title A-Z': 'title.asc',
  'title Z-A': 'title.desc',
};
const radioButtonList = [
  'Everthing',
  "Movies I haven't Seen",
  'Movies I have Seen',
];
const availabiltiesList = [
  'Search all availabilties?',
  'Stream',
  'Free',
  'Ads',
  'Rent',
  'Buy',
];
const releaseList = [
  'Search all Releases?',
  'Search all Countires?',
  'Premier',
  'Theatrical (limited)',
  'Theatrical',
  'Digital',
  'Physical',
  'Tv',
];
/**
 * @description return Body component
 * @returns {JSX}  Body component
 */
function Body() {
  const [showInfo, setShowInfo] = useState(false);
  const [radioBtnState, setRadioBtnState] = useState({
    [radioButtonList[0]]: false,
    [radioButtonList[1]]: false,
    [radioButtonList[2]]: false,
  });
  const [showAvailability, setShowAvailability] = useState(false);
  const [showReleaseDates, setshowReleaseDates] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(false);
  const [searchQuery, setsearchQuery] = useState('popularity.desc');
  // eslint-disable-next-line no-unused-vars
  const [moviePage, setMoviePage] = useState(1);
  const [movies, setMovies] = useState([]);
  async function fetchMoviesShortcut(oldMovies) {
    await fetchMovies(moviePage, searchQuery).then((newMovies) => {
      setMovies(oldMovies.concat(newMovies));
    });
  }
  useEffect(() => {
    fetchMoviesShortcut(movies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviePage]);
  const loadMoreClickHandler = async () => {
    setMoviePage((prevState) => 1 + prevState);
  };
  /**
   * @description hide or show search button and save value
   * @param {String} queryName
   * @param {bool}   showButton
   * @returns {null}
   */
  const sortFiltersClickHandler = (queryName, showButton) => {
    setsearchQuery(sortMap[queryName]);
    setShowSearchButton(showButton);
  };
  /**
   * @description show or hide question mark info on click
   * @param {object}  e Event object
   * @returns {null}
   */
  const searchButtonClickHandler = async () => {
    // fetch again
    if (showSearchButton) await fetchMoviesShortcut([]);
  };

  /**
   * @description show or hide question mark info on click
   * @param {object}  e Event object
   * @returns {null}
   */
  const infoIconClickHandler = (e) => {
    if (e.currentTarget.id === 'icon') {
      e.stopPropagation();
      setShowInfo((prevState) => !prevState);
    } else {
      setShowInfo(false);
    }
  };
  /**
   * @description check or uncheck radio button
   * @param {String}  id radio btn identifier`
   * @returns {null}
   */
  const radioBTNChangeHandler = (id) => {
    setRadioBtnState((prevState) => {
      const newData = {
        [radioButtonList[0]]: false,
        [radioButtonList[1]]: false,
        [radioButtonList[2]]: false,
        [id]: !prevState[id],
      };
      return newData;
    });
  };
  /**
   * @description show or hide availabilties checkboxes
   * @returns {null}
   */
  const toggleAvailabilty = () => {
    setShowAvailability((prevState) => !prevState);
  };
  /**
   * @description show or hide availabilties checkboxes
   * @returns {null}
   */
  const toggleReleaseDates = () => {
    setshowReleaseDates((prevState) => !prevState);
  };
  return (
    <StyledBody>
      <Title title="Popular Movies" theme="bold" />
      {/* SORT DROP DOWN */}
      <FilterCard title="Sort">
        <Title title="Sort Results By" theme="light" />
        <SelectMenu
          optionsList={Object.keys(sortMap)}
          selectMenuChangeHandler={sortFiltersClickHandler}
        />
        <br />
      </FilterCard>

      {/* fILTERS DROP DOWN */}
      <FilterCard title="Filters" onClick={(e) => infoIconClickHandler(e)}>
        {showInfo && (
          <StyledInfoPopUp>
            Log In To Filter Items You&apos;ve Watched
          </StyledInfoPopUp>
        )}
        <Title title="Show Me" theme="light">
          <Icon
            id="icon"
            color="grey"
            iconName="HiQuestion"
            onClick={(e) => infoIconClickHandler(e)}
          />
        </Title>

        <br />
        {radioButtonList.map((label) => (
          <RadioButton
            label={label}
            id={label}
            key={label}
            onChangeHandler={radioBTNChangeHandler}
            checked={radioBtnState[label]}
          />
        ))}

        <Title title="Availabilites" theme="light" />

        {availabiltiesList.map((item) => (
          <CheckBox
            label={item}
            onCheckHandler={
              availabiltiesList[0] === item ? toggleAvailabilty : null
            }
            itemVisibility={
              availabiltiesList[0] === item ? true : showAvailability
            }
            key={item}
          />
        ))}
        <Title title="Release Dates" theme="light" />
        <CheckBox
          label={releaseList[0]}
          onCheckHandler={toggleReleaseDates}
          itemVisibility
          key={releaseList[0]}
        />
        <CheckBox
          label={releaseList[1]}
          itemVisibility={showReleaseDates}
          key={releaseList[1]}
        />
        {releaseList.slice(1).map((item) => (
          <CheckBox
            label={item}
            onCheckHandler={releaseList[0] === item ? toggleReleaseDates : null}
            itemVisibility={releaseList[0] === item ? true : showReleaseDates}
            key={item}
          />
        ))}
        <CountryDropDown />
      </FilterCard>
      <FilterCard title="Where To Watch" />

      <Button
        theme="bigBlue"
        text="Search"
        onClick={searchButtonClickHandler}
        disabled={!showSearchButton}
      />

      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          imageURL={movie.imageURL}
          date={movie.date}
          key={movie.id}
        />
      ))}

      <Button theme="bigBlue" text="LoadMore" onClick={loadMoreClickHandler} />
    </StyledBody>
  );
}

export default Body;
