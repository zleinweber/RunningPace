const paceTableHeaderID = "paceTableHeader";
const paceTableRowID = "paceTableRow";

export function paceTableView(numMiles, pace) {
    const paceTable = document.createElement("div");

    paceTable.appendChild(paceTableHeader());
    for (let mile=1; mile <= numMiles; mile++) {
       paceTable.appendChild(paceTableRow(mile, pace));
    }

    return paceTable;
}

function paceTableHeader() {
    let tableHeader = cloneTableHTML(paceTableHeaderID);
    return tableHeader;
}

function paceTableRow(mile, pace) {
    //console.log(`on mile ${mile} at ${pace} pace`);
    let tableRow = cloneTableHTML(paceTableRowID);
    let mileCol = tableRow.querySelector("#mileDataCol");
    let paceCol = tableRow.querySelector("#paceDataCol");

    mileCol.innerText = `${mile}`;
    paceCol.innerText = `${pace}`;
  
    return tableRow;
}

function cloneTableHTML(elementId) {
    return document.getElementById(elementId).cloneNode(true);
}