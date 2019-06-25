import * as d3 from 'd3';
import * as parseBarsData from '../data/parseBarsData';
// import * as parsePieData from '../data/parsePieData';
import { parseDescription } from '../data/parseDescription';
import barGraph from '../data/barGraph';
// import pieGraph from '../data/pieGraph';
// import barGraph2 from '../data/barGraph2';

let fullBudget, functionalArea, functionalArea_Agencies, fundTypes, fundTypes_funds, fpCategories;
let description = parseDescription();



document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementsByClassName('more_info-btn')[0]
        .addEventListener('click', () => toggleMoreInfo());



    d3.csv("./data/SpendingData2.csv")
        .then((data) => {
            fullBudget = parseBarsData.fullBudget(data);
            functionalArea_Agencies = parseBarsData.functionalArea_Agencies(data);
            fundTypes_funds = parseBarsData.fundTypes_funds(data);
            fpCategories = parseBarsData.fpCategories(data);
            
            barGraph(fullBudget.values);
        });


        let tabs = document.querySelectorAll('.tabs_container li');
        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => renderChart(e.target))
        });
    
});



function renderChart(tab) {

    toggleActiveMainTabs(tab);
    let title = null;

    switch(tab.id) {
        case "fullBudget":
            clearMainSubTabs();
            clearMoreInfo();
            barGraph(fullBudget.values);
            break;
        case "functions":
            clearMainSubTabs();
            clearMoreInfo();
            title = functionalArea_Agencies.name;

            barGraph(functionalArea_Agencies.values);
            generateSubTitle(title, "sub_tabs-main");
            generateMainSubTabs(functionalArea_Agencies.sub);
            break;
        case "fundTypes":
            clearMainSubTabs();
            clearMoreInfo();
            title = fundTypes_funds.name;

            barGraph(fundTypes_funds.values);
            generateSubTitle(title, "sub_tabs-main");
            generateMainSubTabs(fundTypes_funds.sub);
            break;

        case "fpCategories":
            clearMainSubTabs();
            clearMoreInfo();
            title = fpCategories.name;

            barGraph(fpCategories.values);
            generateSubTitle(title, "sub_tabs-main");
            generateMainSubTabs(fpCategories.sub);
            break;
    }
}




function generateMainSubTabs(list){
    // let subTitle = document.getElementById('sub_title');
    let subTabs = document.getElementById('sub_tabs-main');

    // debugger
    subTabs.parentElement.classList.add('active');


    list.forEach(obj => {
        // debugger
        let li = document.createElement('li');
        let text = document.createTextNode(obj.name);
        let amt = document.createTextNode(convertToDollar(obj.values[0].value));
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        span1.append(text);
        span2.append(amt);
        li.append(span1);
        li.append(span2);

        li.addEventListener('click', (e) => {
            toggleActiveSubTabs(e.target);
            clearSubSubTabs();
            clearMoreInfo();
            // debugger
            if (obj.sub) {
                generateSubTitle(obj.name, "sub_tabs-sub");
                generateSubSubTabs(obj.sub);
            }
            
            if(description[e.target.innerText] !== undefined){
                generateMoreInfo(e.target.innerText);
            }
            // debugger
            barGraph(obj.values)
        });
        subTabs.append(li);
    });
}


function generateSubSubTabs(list) {
    let subTabs = document.getElementById('sub_tabs-sub');
    subTabs.classList.add('active');


    list.forEach(obj => {
        let li = document.createElement('li');
        let text = document.createTextNode(obj.name);
        let amt = document.createTextNode(convertToDollar(obj.values[0].value));
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        span1.append(text);
        span2.append(amt);
        li.append(span1);
        li.append(span2);

        li.addEventListener('click', (e) => {
            toggleActiveSubTabs(e.target);
            clearMoreInfo();

            if (description[e.target.innerText] !== undefined) {
                generateMoreInfo(e.target.innerText);
            }

            barGraph(obj.values)
        });
        subTabs.append(li);
    });
}



function generateSubTitle(title, target) {

    let subTabs = document.getElementById(target);

    let titleSpan = document.createElement('span');
    let titleNode = document.createTextNode(title);
    
    titleSpan.append(titleNode);

    switch(target){
        case "sub_tabs-main":
            titleSpan.classList.add('sub_main_title');
            break;
        case "sub_tabs-sub":
            titleSpan.classList.add('sub_sub_title');
            break;
    }

    

    subTabs.append(titleSpan);
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
    let li = list.querySelectorAll('.active');
    li.forEach(line => line.classList.remove('active'));
    
    listItem.classList.add('active');
}





function clearMainSubTabs() {
    let subTabs = document.getElementById('sub_tabs-main');
    subTabs.classList.remove('active');
    while (subTabs.firstChild) {
        subTabs.removeChild(subTabs.firstChild);
    }
}


function clearSubSubTabs() {
    let subTabs = document.getElementById('sub_tabs-sub');
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







function convertToDollar(amt) {
    if (amt === 0) return '0';
    
    let str = amt.toString();
    let dollarStr = "";
    

    let startIndex = -3;
    let endIndex = -3;

    while (str.length > 0) {
        // let startIndex = (str.length < 3) ? 0 : (str.length - 3);
        // let endIndex = (str.length < 3) ? str.length : (str.length - 3);

        let value = str.slice(startIndex, str.length);  
        str = str.slice(0, endIndex);
        

        if (!dollarStr) {
            dollarStr += value;
        } else {
            dollarStr = value + "," + dollarStr;
        }

        // if (parseInt(str) < 4) break;
    }
    return dollarStr;
}