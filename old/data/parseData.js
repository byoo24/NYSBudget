import * as d3 from 'd3';


const convertToInt = (str) => {
    let num = str.replace(/[$,]/g, "");
    return parseInt(num);
}

export const functionalArea = (data) => {

    let func = {
        key: "Functional Area",
        values: d3.nest()
            .key((d) => d.Function)
            .key((d) => d.Agency)
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let num = e["2019-20  Estimates"] || "0";
                        let value = convertToInt(num);

                        if (value < 1) return 1;
                        return value;
                    }),
                    // "2018-19": d3.sum(v, (e) => {
                    //     let amt = e["2018-19  Actuals"];
                    //     return convertToInt(amt);
                    // }),
                    // "2017-18": d3.sum(v, (e) => {
                    //     let amt = e["2017-18  Actuals"];
                    //     return convertToInt(amt);
                    // }),
                }

            })
            .entries(data)
    }
    console.log(func);
    return dataCorrectFormat(func);
}





export const fundTypes = (data) => {

    let func = {
        key: "Fund Types",
        values: d3.nest()
            .key((d) => d["Fund Type"])
            .key((d) => d.Fund)
            .key((d) => d["Subfund Name"])
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let amt = e["2019-20  Estimates"] || "0";
                        return convertToInt(amt);
                    }),
                    // "2018-19": d3.sum(v, (e) => {
                    //     let amt = e["2018-19  Actuals"] || "0";
                    //     return convertToInt(amt);
                    // }),
                    // "2017-18": d3.sum(v, (e) => {
                    //     let amt = e["2017-18  Actuals"] || "0";
                    //     return convertToInt(amt);
                    // }),
                }
            })
            .entries(data)
    }
    return dataCorrectFormat(func);
}






export const fpCategories = (data) => {

    let func = {
        key: "FP Categories",
        values: d3.nest()
            .key((d) => d["FP Category"])
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let amt = e["2019-20  Estimates"] || "0";
                        return convertToInt(amt);
                    }),
                    // "2018-19": d3.sum(v, (e) => {
                    //     let amt = e["2018-19  Actuals"] || "0";
                    //     return convertToInt(amt);
                    // }),
                    // "2017-18": d3.sum(v, (e) => {
                    //     let amt = e["2017-18  Actuals"] || "0";
                    //     return convertToInt(amt);
                    // }),
                }

            })
            .entries(data)
    }
    return dataCorrectFormat(func);
}









function convertToDollar (amt) {
    let dollarStr = "";
    let amtCopy = amt;

    // while (amtCopy > 1000){
    //     let value = amtCopy % 1000;

    //     if(dollarStr !== ""){
    //         dollarStr = value + ',' + dollarStr;
    //     } else {
    //         dollarStr = value;
    //     }
    //     amtCopy = Math.floor(amtCopy / 1000);
    // }

    // dollarStr = amtCopy + dollarStr;
    // console.log(amt, dollarStr);


    console.log(amt);
    if (amt < 1) {
        return 1;
    }
    // console.log(amt);
    return amt;
}



function dataCorrectFormat(data) {

    const { values, value } = data;

    const cleanData = {};
    cleanData.name = data.key
    cleanData.children = new Array();

    if (value) {
        for (let key in value) {
            let newObj = {
                name: `${key}: ${convertToDollar(value[key])}`,
                value: value[key]
            }
            cleanData.children.push(newObj);
        }
    }

    if (values && values.length > 0) {

        for (let i = 0; i < values.length; i++) {
            let newObj = {};

            if (values[i] instanceof Object) {
                newObj.name = values[i].key;
                newObj.children = new Array();

                let inner = dataCorrectFormat(values[i]);
                cleanData.children.push(inner);
            }
        }
    }
    return cleanData
}



















// const parseData = (data) => {

//     let func = {
//         key: "NYS CAFR",
//         values: d3.nest()
//             .key((d) => d.Function)
//             .key((d) => d.Agency)
//             .key((d) => d["Fund Type"])
//             .key((d) => d["FP Category"])
//             .key((d) => d.Fund)
//             .rollup((v) => {
//                 return {
//                     "2019-20": d3.sum(v, (e) => {
//                         let amt = e["2019-20  Estimates"] || "0";
//                         return convertToInt(amt);
//                     }),
//                     // "2018-19": d3.sum(v, (e) => {
//                     //     let amt = e["2018-19  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2017-18": d3.sum(v, (e) => {
//                     //     let amt = e["2017-18  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2016-17": d3.sum(v, (e) => {
//                     //     let amt = e["2016-17  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2015-16": d3.sum(v, (e) => {
//                     //     let amt = e["2015-16  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2014-15": d3.sum(v, (e) => {
//                     //     let amt = e["2014-15  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2013-14": d3.sum(v, (e) => {
//                     //     let amt = e["2013-14  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2012-13": d3.sum(v, (e) => {
//                     //     let amt = e["2012-13  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2011-12": d3.sum(v, (e) => {
//                     //     let amt = e["2011-12  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2010-11": d3.sum(v, (e) => {
//                     //     let amt = e["2010-11  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                     // "2009-10": d3.sum(v, (e) => {
//                     //     let amt = e["2009-10  Actuals"] || "0";
//                     //     return convertToInt(amt);
//                     // }),
//                 }

//             })
//             .entries(data)
//     }

//     // console.log(func);
//     return func;
// }