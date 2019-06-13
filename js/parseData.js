import * as d3 from 'd3';



const convertToInt = (str) => {
    let num = str.replace(/[$,]/g, "");
    return parseInt(num);
}

const parseData = (data) => {
    // var test = d3.key(() => "key");
    // debugger

    let func = {
        key: "NYS CAFR",
        values: d3.nest()
            .key((d) => d.Function)
            .key((d) => d.Agency)
            .key((d) => d["Fund Type"])
            .key((d) => d["FP Category"])
            .key((d) => d.Fund)
            .rollup((v) => {
                return {
                    "2019-20 Estimates": d3.sum(v, (e) => {
                        let amt = e["2019-20 Estimates"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2018-19  Actuals": d3.sum(v, (e) => {
                        let amt = e["2018-19  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2017-18  Actuals": d3.sum(v, (e) => {
                        let amt = e["2017-18  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2016-17  Actuals": d3.sum(v, (e) => {
                        let amt = e["2016-17  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2015-16  Actuals": d3.sum(v, (e) => {
                        let amt = e["2015-16  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2014-15  Actuals": d3.sum(v, (e) => {
                        let amt = e["2014-15  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2013-14  Actuals": d3.sum(v, (e) => {
                        let amt = e["2013-14  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2012-13  Actuals": d3.sum(v, (e) => {
                        let amt = e["2012-13  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2011-12  Actuals": d3.sum(v, (e) => {
                        let amt = e["2011-12  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2010-11  Actuals": d3.sum(v, (e) => {
                        let amt = e["2010-11  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                    "2009-10  Actuals": d3.sum(v, (e) => {
                        let amt = e["2009-10  Actuals"] || "0";
                        return { amount: convertToInt(amt) };
                    }),
                }

            })
            .entries(data)
    }

    // var func = d3.nest()
    //     .key((d) => d.Function)
    //     .key((d) => d.Agency)
    //     .key((d) => d["Fund Type"])
    //     .key((d) => d["FP Category"])
    //     .key((d) => d.Fund)
    //     .rollup((v) => {
    //         return {
    //             "2019-20 Estimates": d3.sum(v, (e) => {
    //                 let amt = e["2019-20 Estimates"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2018-19  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2018-19  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2017-18  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2017-18  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2016-17  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2016-17  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2015-16  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2015-16  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2014-15  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2014-15  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2013-14  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2013-14  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2012-13  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2012-13  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2011-12  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2011-12  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2010-11  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2010-11  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //             "2009-10  Actuals": d3.sum(v, (e) => {
    //                 let amt = e["2009-10  Actuals"] || "0";
    //                 return { amount: convertToInt(amt) };
    //             }),
    //         }

    //     })
    //     .entries(data)

    console.log(func);
    return func;

}


export default parseData;