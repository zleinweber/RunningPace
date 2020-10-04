import '../styles/index.scss';

//if (process.env.NODE_ENV === 'development') {
//  require('../index.html');
//}

const templateTopLevel = document.getElementById("docTemplates");
templateTopLevel.hidden = true;

const paceTable = document.getElementById("paceTable");

let paceForm = document.getElementById("paceForm");
paceForm.addEventListener("submit", event => {
  let numMiles = paceForm.elements['numMiles'];
  let pace = paceForm.elements['pace'];
  let paceTableView = document.getElementById("paceTemplate").cloneNode(true);
  paceTableView.innerText = `running ${numMiles.value} miles at ${pace.value}`;
  paceTable.appendChild(paceTableView);
  event.preventDefault();
});
