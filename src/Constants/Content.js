const moviesContent = ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'];
const tvContent = ['Popular', 'Top Rated', 'On TV', 'Airing Today'];
const peopleContent = ['Popular People'];
const visibleContent = [
  'Contribution Bible',
  'Apps',
  'Discussions',
  'Leaderboard',
  'contribute',
  'API',
  'Support',
  'About',
  'Login',
];
const sortMap = {
  'Popularity descending': 'popularity.desc',
  // eslint-disable-next-line sort-keys
  'Popularity Ascending': 'popularity.asc',
  'Rating Ascending': 'rating.asc',
  'Rating descending': 'rating.desc',
  'Release Date Ascending': 'primary_release_date.asc',
  'Release Date descending': 'primary_release_date.desc',
  'title A-Z': 'title.asc',
  'title Z-A': 'title.desc',
};

const filtersList = [
  'Everything',
  "Movies I haven't Seen",
  'Movies I have Seen',
];

const availabilitiesList = [
  'Search all availabilities?',
  'Stream',
  'Free',
  'Ads',
  'Rent',
  'Buy',
];

const releaseList = [
  'Search all Releases?',
  'Search all Countries?',
  'Premier',
  'Theatrical (limited)',
  'Theatrical',
  'Digital',
  'Physical',
  'Tv',
];
export {
  moviesContent,
  peopleContent,
  tvContent,
  visibleContent,
  filtersList,
  sortMap,
  releaseList,
  availabilitiesList,
};
