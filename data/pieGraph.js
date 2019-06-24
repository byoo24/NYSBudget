import * as d3 from 'd3';



const pieGraph = (data) => {
    const width = 500;
    const height = Math.min(width, 500);


    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

    const pie = d3.pie()
        .sort(null)
        .value(d => d.value);




    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1);

    
    const arcs = pie(data);

    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("text-anchor", "middle")
        .style("font", "12px sans-serif");

    // SLICES
    const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // LABELS
    svg.append("g")
        .attr("class", "labels");  

    g.selectAll("path")
        .data(arcs)
        .enter().append("path")
        .attr("fill", d => color(d.data.name))
        .attr("stroke", "white")
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    const text = g.selectAll("text")
        .data(arcs)
        .enter().append("text")
        .attr("transform", d => {
            // debugger

            let coord = arc.centroid(d);
            // coord[0] *= 2;
            // coord[1] *= 2;

            return `translate(${coord})`
    })
        .attr("dy", "0.35em");

    text.append("tspan")
        .attr("x", 0)
        .attr("y", "-0.7em")
        .style("font-weight", "bold")
        .text(d => {
            // debugger
            return d.data.name
        });

    text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString());


    

    const chart = document.getElementById("chart");
    chart.append(svg.node());

}


export default pieGraph;