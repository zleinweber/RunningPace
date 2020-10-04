import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

let paceForm = document.getElementById("paceForm");
paceForm.addEventListener("submit", event => {
  let numMiles = paceForm.elements['numMiles'];
  let pace = paceForm.elements['pace'];
  console.log(numMiles.value, pace.value);
  event.preventDefault();
});