import { React, PropTypes } from 'reuse/Packages';
import Title from 'Components/Title/Title';
import Image from 'Components/Image/Image';
import StlyedMovieCard from './MovieCard.Style';
import StyledPosterContainer from './PosterContainerStyle';
import StyledRightContainer from './rightContainer';
import StlyedOverFlowContainer from './overFlowContainerStyle';
/**
 * @description return Movie Card
 * @param {string} title movie title
 * @param {string} date movie date
 * @param {string} description movie overview
 * @param {string} imageURL  movie image url
 * @returns {JSX}  Logo Container component
 */
function MovieCard({ title, description, date, imageURL }) {
  return (
    <StlyedMovieCard>
      <StyledPosterContainer>
        <Image imagePath={imageURL} />
      </StyledPosterContainer>
      <StyledRightContainer>
        <Title title={title} theme="smallBold" />
        <Title title={date} theme="smallLight" />
        <StlyedOverFlowContainer>{description}</StlyedOverFlowContainer>
      </StyledRightContainer>
    </StlyedMovieCard>
  );
}
MovieCard.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default MovieCard;
