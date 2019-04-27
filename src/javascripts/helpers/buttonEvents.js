import locations from '../components/locations/locations';
// import singleMovie from '../components/singleMovie/singleMovie';

const filterButtonEvent = (e) => {
  const buttonId = e.target.id;
  const darkLocations = locations.getLocations().filter(x => x.shootTime === 'After Dark');
  const morningLocations = locations.getLocations().filter(x => x.shootTime === 'Morning');
  const afternoonLocations = locations.getLocations().filter(x => x.shootTime === 'Afternoon');
  const eveningLocations = locations.getLocations().filter(x => x.shootTime === 'Evening');
  switch (buttonId) {
    case 'morning':
      locations.domStringBuilder(morningLocations);
      break;
    case 'afternoon':
      locations.domStringBuilder(afternoonLocations);
      break;
    case 'evening':
      locations.domStringBuilder(eveningLocations);
      break;
    case 'dark':
      locations.domStringBuilder(darkLocations);
      break;
    default:
      locations.domStringBuilder(locations);
  }
};

const filterByTextEvent = (e) => {
  const searchText = e.target.value;
  const searchLocations = locations.getLocations().filter((x) => {
    const hasName = x.name.includes(searchText);
    const hasAddress = x.address.includes(searchText);
    return hasName || hasAddress;
  });
  locations.domStringBuilder(searchLocations);
};

// const filterMovieEvent = (e) => {
// const filterMovie = e.target.value;
// };

const attachButtons = () => {
  document.getElementById('dark').addEventListener('click', filterButtonEvent);
  document.getElementById('afternoon').addEventListener('click', filterButtonEvent);
  document.getElementById('evening').addEventListener('click', filterButtonEvent);
  document.getElementById('morning').addEventListener('click', filterButtonEvent);
  document.getElementById('all').addEventListener('click', filterButtonEvent);
  document.getElementById('search-input').addEventListener('keyup', filterByTextEvent);
  // document.getElementById('single-movie').addEventListener('click', filterMovieEvent);
};

export default { attachButtons };
