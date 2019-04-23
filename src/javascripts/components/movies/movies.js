import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id=${movie.id} class="card movie col-3">`;
    domString += '<div class="card-body">';
    domString += `<h4 class="card-title">${movie.name}</h4>`;
    domString += `<div>${movie.genre}</div>`;
    domString += `<div>${movie.releaseDate}</div>`;
    domString += `<div>${movie.description}</div>`;
    domString += `<div>${movie.locations.length} Locations</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};


const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
