import { React, useState } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import FilterCard from 'Components/FilterCard/FilterCard';
import SelectMenu from 'Components/SelectMenu/SelectMenu';
import Icon from 'Components/Icon/Icon';
import RadioButton from 'Components/RadioButton/RadionButton';
import CheckBox from 'Components/CheckBox/CheckBox';
import StyledInfoPopUp from './InfoPopUp.Style';
import StyledBody from './Body.Style';

const sortList = [
  'Popularity Ascending',
  'Popularity descending',
  'Rating Ascending',
  'Rating descending',
  'Release Date Ascending',
  'Release Date descending',
  'title A-Z',
  'title Z-A',
];
const availabiltiesList = [
  'Search all availabilties?',
  'Stream',
  'Free',
  'Ads',
  'Rent',
  'Buy',
];
// const releaseList=['Search all Releases?','Search all Countires?','Premier','Theatrical (limited)','Theatrical','Digital','Physical','Tv'];
/**
 * @description return Body component
 * @returns {JSX}  Body component
 */
function Body() {
  const [showInfo, setShowInfo] = useState(false);
  const [radioBtnState, setRadioBtnState] = useState({
    everything: false,
    'have seen': false,
    'havent seen': false,
  });
  const [showAvailability, setShowAvailability] = useState(false);

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
        everything: false,
        'have seen': false,
        'havent seen': false,
        [id]: !prevState[id],
      };
      return newData;
    });
  };
  const toggleAvailabilty = () => {
    setShowAvailability((prevState) => !prevState);
  };
  return (
    <StyledBody>
      <Title title="Popular Movies" theme="bold" />
      <FilterCard title="Sort">
        <Title title="Sort Results By" theme="light" />
        <SelectMenu optionsList={sortList} />
        <br />
      </FilterCard>
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
        <RadioButton
          label="Everthing"
          id="everything"
          onChangeHandler={radioBTNChangeHandler}
          checked={radioBtnState.everything}
        />
        <RadioButton
          label="Movies I haven't Seen"
          onChangeHandler={radioBTNChangeHandler}
          checked={radioBtnState['have seen']}
          id="have seen"
        />
        <RadioButton
          label="Movies I have Seen"
          onChangeHandler={radioBTNChangeHandler}
          checked={radioBtnState['havent seen']}
          id="havent seen"
        />
        <Title title="Availabilites" theme="light" />

        {availabiltiesList.map((item) => (
          <CheckBox
            label={item}
            firstClickHandler={
              availabiltiesList[0] === item ? toggleAvailabilty : null
            }
            itemVisibility={
              availabiltiesList[0] === item ? true : showAvailability
            }
            key={item}
          />
        ))}
      </FilterCard>
      {/* <FilterCard title="Filters" />
      <FilterCard title="Where To Watch" /> */}
    </StyledBody>
  );
}

export default Body;
