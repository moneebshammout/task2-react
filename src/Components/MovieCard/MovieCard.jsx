import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Title from 'Components/Title/Title';
import Image from 'Components/Image/Image';
import Icon from 'Components/Icon/Icon';

import {
  DesktopDots,
  DesktopPercentage,
  OverFlowContainer,
  PosterContainer,
  RightContainer,
  StyledMovieCard,
} from './MovieCard.Style';

/**
 *  Create Movie Card.
 * @param {object} props  Component variables.
 * @param {string} props.date movie date.
 * @param {string} props.description movie overview.
 * @param {string} props.imageURL  movie image url.
 * @param {number} props.percentageRate  movie vote rate.
 * @param {string} props.title movie title.
 * @return {JSX}  Logo Container component.
 */

function MovieCard({ title, description, date, imageURL, percentageRate }) {
  const [blur, setBlur] = useState(false);
  const iconClickHandler = () => {
    setBlur((prevState) => !prevState);
  };
  return (
    <StyledMovieCard blur={blur}>
      <PosterContainer>
        <DesktopDots>
          <Icon
            iconName="Hidots"
            onClick={iconClickHandler}
            color="transparent"
            hoverEffect
          />
        </DesktopDots>
        {/* not working its blurs */}
        {/* <StyledMovieDropDownMEnu blur={blur}>
          <DropDownMenu visibility content={['aa','bb']} theme='smallBold' dropType='navDrops'/>
          
        </StyledMovieDropDownMEnu> */}
        <DesktopPercentage percentage={percentageRate}>
          &nbsp;{`${percentageRate * 10}%`}
        </DesktopPercentage>
        <Image imagePath={imageURL} className="poster" />
      </PosterContainer>
      <RightContainer>
        <div>
          <Title title={title} theme="moviesBold" />
          <Title title={date} theme="moviesLight" />
        </div>
        <OverFlowContainer>{description}</OverFlowContainer>
      </RightContainer>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  percentageRate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
