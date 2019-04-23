import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id=${location.id} class="card location col-2">`;
    domString += `<div class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</div>`;
    domString += `<img src=${location.imageUrl}>`;
    domString += `<div>${location.address}</div>`;
    // domString += `<div>${location.shootTime}</div>`;
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};


const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
