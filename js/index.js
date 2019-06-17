import * as d3 from 'd3';
import * as parseData from '../data/parseData';
import sunburst from '../data/sunburst';

let dataFunctions = null, dataFunds = null, dataFP = null;






document.addEventListener("DOMContentLoaded", () => {

    let categories = document.getElementsByClassName('category');
    
    for( let i = 0; i < categories.length; i++) {
        let cat = categories[i];
        cat.addEventListener('click', e => { renderData(e) });
    }


    
    d3.csv("./data/SpendingData.csv")
        .then((data) => {
            dataFunctions = parseData.functionalArea(data);
            dataFunds = parseData.fundTypes(data);
            dataFP = parseData.fpCategories(data);

            sunburst(dataFunctions);
        });
});



function renderData(e){

    switch (e.target.getAttribute('id')) {
        case "category_functions":
            sunburst(dataFunctions);
            break;
        case "category_funds":
            sunburst(dataFunds);
            break;
        case "category_fp":
            sunburst(dataFP);
            break;
    }


    console.log('yay');
}