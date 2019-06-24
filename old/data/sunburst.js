import * as d3 from 'd3';




const sunburst = (data) => {
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateSinebow, data.children.length + 1));
    const format = d3.format(",d");
    const width = 932;
    const radius = width / 6;

    const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

    
    // CIRCLE PARTITION
    const root = partition(data);
    root.each(d => d.current = d);
    
    // SIDEBAR
    const menu = d3.select("#menu");
    const rootDom = d3.select("#root");

    

    

    // CIRCLE
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, width])
        .style("font", "12px");

    const g = svg.append("g")
        .attr("transform", `translate(${width / 2}, ${width / 2})`);

    const path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
        .attr("d", d => arc(d.current));

    path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

    path.append("title")
        .text(d => `${format(d.value)}`);
        // .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    const label = g.append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .style("text-overflow", "ellipsis")
        .style("overflow", "hidden")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", d => +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => {
            if (d.data.name.length > 14) {
                return d.data.name.slice(0, 15) + "...";
            } else {
                return d.data.name;
            }
        });

    const parent = g.append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);


    
    function renderCategories(p) {
        rootDom.append("div")
            .style("display", "block")
            .selectAll("span")
            .data(p.descendants().slice(0, 1))
            .join("span")
            .style("display", "block")
            .text(d => d.data.name)
            .on("click", clicked);
    }


    function renderMenu(p) {
        
        menu.selectAll("li")
            .data(p.descendants().slice(0, 1)[0].children)
            .enter()
            .append("li")
            .classed("menu-item", true)
            .style("user-select", "none")
            .attr("fill-opacity", d => +labelVisible(d.current))
            .on("click", clicked);

        menu.selectAll("li")
            .data(p.descendants().slice(0, 1)[0].children)
            .append("span")
            .classed("menu_item-text", true)
            .text(d => d.data.name)

        menu.selectAll("li")
            .data(p.descendants().slice(0, 1)[0].children)
            .append("span")
            .classed("menu_item-bg", true)
            .style("background-color", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
    }



    function partition(data) {
        const root = d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value);
        return d3.partition()
            .size([2 * Math.PI, root.height + 1])(root);
    }

    // CIRCLE
    function arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y}, 0) rotate(${x < 180 ? 0 : 180})`;
    }

    function clicked(p) {
        parent.datum(p.parent || root);

        // renderMenu(p);


        if(!p.children) return;

        root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
        });

        const t = g.transition().duration(750);

        path.transition(t)
            .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
            })
            .filter(function (d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
            .attrTween("d", d => () => { 
                // debugger
                // if(!d.current.x1) d.current.x1 = d.current.y1;
                return arc(d.current)
            });

        label.filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));

        
        
        menu.selectAll("li")
            .data(p)    
            .exit()
            .remove()
            

        // menu.selectAll("li")
        //     .data(root.descendants().slice(0, 1)[0].children)
        //     .enter()
        //     .append("li")
        //     .classed("menu-item", true)
        //     .style("user-select", "none")
        //     .attr("fill-opacity", d => +labelVisible(d.current))
        //     .on("click", clicked);

        renderMenu(p);



        // menuItems.filter(function (d) {
        //     return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        // })
    }


    // SIDEBAR
    function menuItemVisible(d) {
        if (d.y1 <= 2 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03){
            return 'block';
        } else {
            return 'none';
        }
    }

    d3.selectAll("#graphic > *").remove();

    const graphic = document.getElementById('graphic');
    graphic.append(svg.node());
    // return svg.node();
    
    d3.selectAll("#root > *").remove();
    d3.selectAll("#menu > *").remove();
    // const sidebar = document.getElementById('menu');
    // sidebar.append(menuItems.node());
    renderCategories(root);
    renderMenu(root);
}


export default sunburst;
