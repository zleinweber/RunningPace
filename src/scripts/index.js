import '../styles/index.scss';
import { paceTableView, zachModuleTest } from './paceTable';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}
const templateTopLevel = document.getElementById("docTemplates");
templateTopLevel.hidden = true;

let paceTableContent = document.getElementById("paceTable");
let paceForm = document.getElementById("paceForm");
paceForm.addEventListener("submit", event => {
    let numMiles = paceForm.elements['numMiles'].value;
    let pace = paceForm.elements['pace'].value;

    let paceTableHTML = paceTableView(numMiles, pace);
    paceTableContent.innerHTML = "";
    paceTableContent.appendChild(paceTableHTML);
    event.preventDefault();
});
