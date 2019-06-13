import * as d3 from 'd3';
import { csvParse, dsvFormat, tsvParse, csvFormat } from 'd3-dsv';


import parseData from './parseData';
import Sunburst from './sunburst';

import sunburst from './sunburst';
import sunburstDemo from './sunburst_demo';
// const sunburst = require('./sunburst.js');

// const data = require('./dist/data.json');
// let data = null;

const convertInt = (str) => {
    let num = str.replace(/[$,]/g, "");
    return parseInt(num);
}


document.addEventListener("DOMContentLoaded", () => {
    
    // d3.csv("https://raw.githubusercontent.com/d3/d3-hierarchy/v1.1.8/test/data/flare.json")
    //     .then((data) => {
    //         console.log(data);
    //         sunburst(data);
    //     });

    // d3.csv("./data/SpendingData.csv")
    //     .then((data) => {
    //         let d = parseData(data);
            
    //         console.log(d);
    //     })

    d3.json("./dist/data_demo.json")
        .then((data) => {
            // debugger
            console.log(data);
            sunburstDemo(data);
        });


    // d3.json("./dist/data.json")
    //     .then((data) => {
    //         // debugger
    //         console.log(data);
    //         sunburst(data);
    //     });

    // d3.csv("./data/SpendingData.csv")
    //     .then((data) => {
    //         // debugger
    //         let d = parseData(data);
    //         // // debugger

    //         // let test = {};

    //         // q.forEach((obj) => {
    //         //     // debugger
    //         //     test[obj.key] = obj;
    //         // });

    //         // console.log(test);
    //         // debugger
    //         // console.log(d3.json(data));
    //         // let d = parseData(data);
    //         sunburst(d);
    //     })



    // d3.csv("./data/SpendingData.csv").then((data) => {
       
    //     var func = d3.nest()
    //                     .key((d) => d.Function )
    //                     .key((d) => d.Agency )
    //                     .key((d) => d["Fund Type"])
    //                     .key((d) => d["FP Category"])
    //                     .key((d) => d.Fund)
    //                     .rollup((v) => { 
                            
    //                         return {
    //                             "2019-20 Estimates": d3.sum(v, (e) => { 
    //                                 let value = e["2019-20 Estimates"] || "0";
    //                                 return convertInt(value); 
    //                             }),
    //                             "2018-19  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2018-19  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2017-18  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2017-18  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2016-17  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2016-17  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2015-16  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2015-16  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2014-15  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2014-15  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2013-14  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2013-14  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2012-13  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2012-13  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2011-12  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2011-12  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2010-11  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2010-11  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                             "2009-10  Actuals": d3.sum(v, (e) => {
    //                                 let value = e["2009-10  Actuals"] || "0";
    //                                 return convertInt(value);
    //                             }),
    //                         }
                            
    //                     })
    //                     .entries(data)

    //     console.log(func);
    // });


    // d3.dsv(",", "./data/SpendingData.csv", (d) => {
    //     console.log(d);
    // });

    // const json = d3.csvParse("./data/SpendingData.csv")
    //     .row(function(d) {
    //         return {
    //             function:parseData(d.Function)
    //         }
    //     })






    // d3.dsv(",", "./data/SpendingData.csv", function(d) {

    //     return {

    //         "test": csvFormat(d.Function)
    //         // "name": "Functional Area",
    //         // "children": [
    //         //     {
    //         //         "name": d.Function,
    //         //     }
    //         // ]
    //     }

    //     // return {
    //     //     function: d.Function,
    //     //     agency2: {
    //     //         agency: d.Agency
    //     //     },
    //     //     agency: d.Agency,
    //     //     fund_type: d["Fund Type"],
    //     //     fp_category: d["FP Category"],
    //     //     fund: d.Fund,
    //     //     subfund_name: d["Subfund Name"],
    //     //     "2019-20 Estimates": d["2019-20  Estimates"],
    //     //     "2018-19 Actuals": d["2018-19  Actuals"],
    //     //     "2017-18 Actuals": d["2017-18  Actuals"],
    //     //     "2016-17 Actuals": d["2016-17  Actuals"],
    //     //     "2015-16 Actuals": d["2015-16  Actuals"],
    //     //     "2014-15 Actuals": d["2014-15  Actuals"],
    //     //     "2013-14 Actuals": d["2013-14  Actuals"],
    //     //     "2012-13 Actuals": d["2012-13  Actuals"],
    //     //     "2011-12 Actuals": d["2011-12  Actuals"],
    //     //     "2010-11 Actuals": d["2010-11  Actuals"],
    //     //     "2009-10 Actuals": d["2009-10  Actuals"],
    //     //     "2008-09 Actuals": d["2008-09  Actuals"],
    //     //     "2007-08 Actuals": d["2007-08  Actuals"],
    //     //     "2006-07 Actuals": d["2006-07  Actuals"],
    //     //     "2005-06 Actuals": d["2005-06  Actuals"],
    //     //     "2004-05 Actuals": d["2004-05  Actuals"],
    //     //     "2003-04 Actuals": d["2003-04  Actuals"],
    //     //     "2002-03 Actuals": d["2002-03  Actuals"],
    //     //     "2001-02 Actuals": d["2001-02  Actuals"],
    //     // };
    // }).then(function(data) {
    //     console.log(data);
    // })

    // d3.dsv(",", "test.csv", function (d) {
    //     return {
    //         year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    //         make: d.Make,
    //         model: d.Model,
    //         length: +d.Length // convert "Length" column to number
    //     };
    // }).then(function (data) {
    //     console.log(data);
    // });

});