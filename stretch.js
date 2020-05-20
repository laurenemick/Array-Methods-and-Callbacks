import { fifaData } from './fifa.js';
console.log(fifaData);

// - [ ] Account for ties in your 'finals' data set
function getFinals(data) {
    return data.filter(function(data){
        return data["Stage"] === "Final";
    });
}
// console.log(getFinals(fifaData));


function getWinners(cb) {
    const winners = [];
    const ties = [];

    cb.forEach(function(finalTotal){
        if (finalTotal["Home Team Goals"] > finalTotal["Away Team Goals"]){
            winners.push(finalTotal["Home Team Name"]);
        } else if (finalTotal["Home Team Goals"] < finalTotal["Away Team Goals"]) {
            winners.push(finalTotal["Away Team Name"]);
        } else {
            ties.push(finalTotal["Home Team Name"] + '/' + finalTotal["Away Team Name"]);
        }
    });
    return `Winners: ${winners}, Ties: ${ties}`;
}
console.log(getWinners(getFinals(fifaData)));