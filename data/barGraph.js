import * as d3 from 'd3';



const barGraph = (data) => {
    d3.selectAll('svg > *').remove();
    
    const height = 300;
    const width = 500;
    const margin = {
        top: 20,
        right: 0,
        bottom: 30,
        left: 90
    }

    let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove());

    let xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    let x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);


    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());



    const svg = d3.select("svg");

    // const svg = d3.create("svg")
    //     // .style("width", width)
    //     // .style("height", height)
    //     .attr("viewBox", [0, 0, width, height])

    const bar = svg.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .style("mix-blend-mode", "multiply")
        .classed("graphic-bar", true)
        // .attr("fill", d => color(d.name))
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())

    bar.append("title")
        .text(d => `${d.value}`);


    bar.append("span")
        .classed("amt", true)
        .text(d => `${d.value}`);

    const gx = svg.append("g")
        .call(xAxis);

    const gy = svg.append("g")
        .call(yAxis);

    svg.node().update = () => {
        const t = svg.transition()
            .duration(750);

        bar.data(data, d => d.name)
            .order()
            .transition(t)
            .delay((d, i) => i * 20)
            .attr("x", d => x(d.name));

        gx.transition(t)
            .call(xAxis)
            .selectAll(".tick")
            .delay((d, i) => i * 20);
    };

    

    const chart = document.getElementById("chart");
    // debugger
    chart.append(svg.node());



    const sortData = (order) => {
        switch (order) {
            case "name-ascending": data.sort((a, b) => b.name.localeCompare(a.name)); break;
            case "value-ascending": data.sort((a, b) => a.value - b.value); break;
            case "value-descending": data.sort((a, b) => b.value - a.value); break;
        }
        x.domain(data.map(d => d.name));
        svg.node().update();
        return order;
    }


    document.getElementById("sortGraph")
                .addEventListener("change", (e) => {
                    sortData(e.target.value)
                });

    
    
}






export default barGraph;