import * as d3 from 'd3';
import * as parseData from '../data/parseData';
const { parseDescription } = require('../data/parseDescription');

// D3 Bar Graph
const width = 500;
const height = 300;
const svg = d3.select('svg');
// svg.attr("viewBox", [0, 0, width, height]);

const margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 90
}

const animateDuration = 600;
const animateDelay = 100;



// D3 Render
const render = data => {
    d3.selectAll('svg > *').remove();
    d3.select('#tooltip').remove();

    let xValue = d => d.name;
    let yValue = d => d.value;

    let tooltip = d3.select('#nysBudget')
        .append('div')
        .attr('id', 'tooltip')
        .style('position', 'absolute')
        .style('background', '#f4f4f4')
        .style('padding', '5px 15px')
        .style('border', '1px #333 solid')
        .style('border-radius', '5px')
        .style('opacity', '0');


    let yScale = d3.scaleLinear()
        .domain([0, d3.max(data, yValue)])
        .range([height - margin.bottom, margin.top]);

    let xScale = d3.scaleBand()
        .domain(data.map(xValue))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    let yAxis = g => g
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale))
        .call(g => g.select(".domain").remove());

    let xAxis = g => g
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSizeOuter(0));

    let gy = svg.append('g')
        .call(yAxis);

    let gx = svg.append('g')
        .call(xAxis);

    let g = svg.append('g')
            .attr('id', 'bars')
            .attr('fill', 'steelblue')
            .selectAll('rect')
            .data(data)
            .enter().append('rect')
            .attr('x', d => xScale(xValue(d)))
            .attr('y', height - margin.bottom)
            .attr('height', 0)
            .attr('width', d => xScale.bandwidth())
        .on('mouseover', d => {
            
            tooltip.transition()
                .style('opacity', 1);
            tooltip.html(d.value)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY) + 'px');

            d3.select(this).style('opacity', 0.5);
        })
        .on('mouseout', d => {
            tooltip.transition()
                .style('opacity', 0)
            d3.select(this).style('opacity', 1)
        });


    g.transition()
        .attr('height', d => yScale(0) - yScale(yValue(d)))
        .attr('y', d => yScale(yValue(d)))
        .duration(animateDuration)
        .delay((d, i) => i * animateDelay)
        .ease(d3.easeElastic);
};




// D3 CSV and DOM Manipulation

let fullBudget = null;
let functionalArea = null;
let fundTypes = null;
let fpCategories = null;


document.querySelectorAll('.tabs_main li')
        .forEach(tab => tab.addEventListener('click', 
            e => {
                clearActive('.tabs_main');
                e.target.classList.add('active');
                changeCurrentTab(e.target.innerText);
                renderMoreInfo(e.target.innerText);
                renderChart(e.target.innerText);
            })
        );

d3.csv('./data/SpendingData.csv')
    .then(data => {
        fullBudget = parseData.fullBudget(data);
        functionalArea = parseData.functionalArea(data);
        fundTypes = parseData.fundTypes(data);
        fpCategories = parseData.fpCategories(data);

        changeCurrentTab(fullBudget.name);
        render(fullBudget.values);
    })
        
        




// DOM Manipulation


function renderChart(tab) {
    switch (tab) {
        case "Full Budget":
            clearSubTabs();
            render(fullBudget.values);
            break;
        case "Functional Area":
            renderSubTabs(functionalArea);
            render(functionalArea.values);
            break;
        case "Fund Types":
            renderSubTabs(fundTypes);
            render(fundTypes.values);
            break;
        case "Financial Planning":
            renderSubTabs(fpCategories);
            render(fpCategories.values);
            break;
    }
}



const subTabs = document.getElementsByClassName('tabs_sub')[0];

function renderSubTabs(root) {
    clearSubTabs();
    
    

    if (root.sub !== null) {
        root.sub.forEach(obj => {
            const li = document.createElement('li');
            const text = document.createTextNode(obj.name);
            li.append(text);

            li.addEventListener('click', e => {
                changeCurrentTab(obj.name);
                render(obj.values);
                renderMoreInfo(obj.name);

                if (obj.sub !== null) {
                    renderSubTabs(obj);

                    const back = document.createElement('li');
                    const backText = document.createTextNode('Back');
                    back.classList.add('back');
                    back.append(backText);
                    back.addEventListener('click', () => {
                        changeCurrentTab(root.name);
                        render(root.values);
                        renderSubTabs(root);
                        renderMoreInfo(root.name);
                    });
                    subTabs.prepend(back);
                }
            });

            subTabs.append(li);
        });
    }
    
}


function clearSubTabs() {
    // let subTabs = document.getElementById('sub_tabs-main');
    subTabs.classList.remove('active');
    while (subTabs.firstChild) {
        subTabs.removeChild(subTabs.firstChild);
    }
}


function clearActive(info) {
    const tab = document.querySelector(`${info} .active`);
    tab.classList.remove('active');
}


function changeCurrentTab(newText) {
    const current = document.getElementById('current_tab');
    current.innerText = newText;
}


function renderMoreInfo(subject) {
    const moreInfo = document.getElementById('more_info');
    const text = parseDescription[subject];
    
    if(text !== undefined) {
        moreInfo.innerHTML = text;
        moreInfo.style.opacity = 1;
    } else {
        moreInfo.style.opacity = 0;
        moreInfo.innerHTML = " ";
    }
}