import * as d3 from 'd3';
import * as parseBarsData from '../data/parseBarsData';
import * as parsePieData from '../data/parsePieData';
import { parseDescription } from '../data/parseDescription';
import barGraph from '../data/barGraph';
import pieGraph from '../data/pieGraph';
// import barGraph2 from '../data/barGraph2';

let fullBudget, functionalArea, functionalArea_Agencies, fundTypes, fundTypes_funds, fpCategories;
let description = parseDescription();



document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementsByClassName('more_info-btn')[0]
        .addEventListener('click', () => toggleMoreInfo());



    d3.csv("./data/SpendingData2.csv")
        .then((data) => {
            fullBudget = parseBarsData.fullBudget(data);
            functionalArea = parseBarsData.functionalArea(data);
            functionalArea_Agencies = parseBarsData.functionalArea_Agencies(data);
            fundTypes = parseBarsData.fundTypes(data);
            fundTypes_funds = parseBarsData.fundTypes_funds(data);
            fpCategories = parseBarsData.fpCategories(data);

            // console.log(fullBudget);
            // console.log(functionalArea);
            // console.log(functionalArea_Agencies);
            // console.log(fundTypes);
            // console.log(fundTypes_funds);
            // console.log(fpCategories);

            
            barGraph(fullBudget.sub);
            // pieGraph(fullBudget.sub);


            // let fundTypes_pie = parsePieData.fundTypes(data);
            // pieGraph(fundTypes_pie.sub);
            // debugger
        });


        let tabs = document.querySelectorAll('.tabs_container li');
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => renderChart(e.target))
        });
    
});



function renderChart(tab) {

    toggleActiveMainTabs(tab);

    switch(tab.id) {
        case "fullBudget":
            clearSubTabs();
            clearMoreInfo();
            barGraph(fullBudget.sub);
            break;
        case "functions":
            clearSubTabs();
            clearMoreInfo();
            generateSubTabs(functionalArea.sub);
            break;
        case "fundTypes":
            clearSubTabs();
            clearMoreInfo();
            generateSubTabs(fundTypes.sub);
            break;
        case "fpCategories":
            clearSubTabs();
            clearMoreInfo();
            generateSubTabs(fpCategories.sub);
            break;
    }
}




function generateSubTabs(list){
    let subTabs = document.getElementById('sub_tabs');
    subTabs.classList.add('active');


    list.forEach(obj => {
        let li = document.createElement('li');
        let text = document.createTextNode(obj.name);
        li.append(text);
        li.addEventListener('click', (e) => {
            toggleActiveSubTabs(e.target);
            clearMoreInfo();
            
            if(description[e.target.innerText] !== undefined){
                generateMoreInfo(e.target.innerText);
            }

            barGraph(obj.sub)
        });
        subTabs.append(li);
    });
}

function generateMoreInfo(info) {
    // debugger
    let moreInfo = document.getElementById('more_info');
    moreInfo.classList.add('show');

    let moreText = document.getElementsByClassName('more_info-text')[0];
    let h2 = document.createElement('h2');
    let title = document.createTextNode(info);
    let p = document.createElement('p');
    let text = document.createTextNode(description[info])
    h2.append(title);
    p.append(text);

    moreText.append(h2)
    moreText.append(p);
}


function toggleActiveMainTabs(tab) {
    let tabs = document.getElementsByClassName('tabs_container');
    let li = tabs[0].querySelector('.active');
    li.classList.remove('active');
    tab.classList.add('active');
}


function toggleActiveSubTabs(listItem) {
    let list = document.getElementById('sub_tabs');
    let li = list.querySelector('.active');
    if (li) li.classList.remove('active');
    
    listItem.classList.add('active');
}


function clearSubTabs() {
    let subTabs = document.getElementById('sub_tabs');
    subTabs.classList.remove('active');
    while (subTabs.firstChild) {
        subTabs.removeChild(subTabs.firstChild);
    }
}

function clearMoreInfo() {
    let moreInfo = document.getElementById('more_info');
    moreInfo.classList.remove('show');

    
    let moreText = document.getElementsByClassName('more_info-text')[0];
    moreText.classList.add('hide');
    while (moreText.firstChild) {
        moreText.removeChild(moreText.firstChild);
    }
}


function toggleMoreInfo() {
    let moreBtn = document.getElementsByClassName('more_info-btn')[0];
    let moreText = document.getElementsByClassName('more_info-text')[0];
    
    moreText.classList.toggle('hide');

    // debugger

    if (moreText.classList.contains('hide')) {
        moreBtn.classList.remove('close');
        moreBtn.innerText = "More Info";
    } else {    
        moreBtn.classList.add('close');
        moreBtn.innerText = "CLOSE";
    }
}