import '../styles/main.scss';

import movies from './components/movies/movies';

import locations from './components/locations/locations';

import attachButtons from './helpers/buttonEvents';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  attachButtons.attachButtons();
};

init();
