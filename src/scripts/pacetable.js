const paceTableHeaderID = "paceTableHeader";
const paceTableRowID = "paceTableRow";

/*
 * Template Functions for Pace Table
 */

export function paceTableView(numMiles, pace) {
    const paceTable = document.createElement("div");
    const paceInSeconds = parseMilePace(pace);
    let elapsedTime = 0;
    let elapsedTimeHuman = "";

    paceTable.appendChild(paceTableHeader());
    for (let mile=1; mile <= numMiles; mile++) {
        elapsedTime += paceInSeconds;
        elapsedTimeHuman = formatElapsedTime(elapsedTime);
       paceTable.appendChild(paceTableRow(mile, elapsedTimeHuman));
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

/*
 * Utility Functions for Pacing...
 */

 function parseMilePace(pace) {
    // Support various pacing formats
    //  - MM:SS

    let paceArray = pace.split(":");
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let paceSeconds = 0;
     
    if (paceArray.length === 3) {
        hours = parseInt(paceArray[0]);
        minutes = parseInt(paceArray[1]);
        seconds = parseInt(paceArray[2]);
    } else if  (paceArray.length === 2) {
        minutes = parseInt(paceArray[0]);
        seconds = parseInt(paceArray[1]);
    } else {
        throw new Error(`Invalid Pace Format ${pace}`);
    }

    paceSeconds = ((hours * 60) * 60) + (minutes * 60) + seconds;
    return paceSeconds;
 }

 function formatElapsedTime(elapsedSeconds) {
    let hours = 0;
    let minutes = 0;
    let seconds = elapsedSeconds;
    let hourString = "";
    let minuteString = "";
    let secondString = "";

    if (seconds > 60) {
        minutes = Math.floor(seconds / 60);
        seconds %= 60;
    }

    if (minutes > 60) {
        hours = Math.floor(minutes / 60);
        minutes %= 60;
    }

    hourString = hours.toString().padStart(2, "0");
    minuteString = minutes.toString().padStart(2, "0");
    secondString = seconds.toString().padStart(2, "0");

    return `${hourString}:${minuteString}:${secondString}`;
 }