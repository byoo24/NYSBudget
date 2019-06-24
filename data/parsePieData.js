import * as d3 from 'd3';


const convertToInt = (str) => {
    let num = str.replace(/[$,]/g, "");
    return parseInt(num);
}



function dataCleanFormat(data) {
    let cleanData = {
        name: data.key,
    };

    // debugger

    if (data.value) {
        // cleanData.sub = [];
        
        for (let key in data.value) {

            // cleanData.name = key;
            cleanData.value = data.value[key];
            // let newObj = {
            //     name: key,
            //     value: data.value[key]
            // }
            // cleanData.sub.push(newObj);
        }
    } else if (data.values) {
        cleanData.sub = [];
        
        data.values.forEach((obj) => {
            let inner = dataCleanFormat(obj);
            cleanData.sub.push(inner);
        });
    }

    return cleanData;
}




export const fundTypes = (data) => {
    let func = {
        key: "Functional Area",
        values: d3.nest()
            .key((d) => d.Function)
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let value = convertToInt(e["2019-20  Estimates"]);
                        return value * 1000;
                    })
                }
            }).entries(data),
    }
    return dataCleanFormat(func);
}






export const fullBudget = (data) => {

    let func = {
        key: "Full Budget",
        value: d3.nest()
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let value = convertToInt(e["2019-20  Estimates"]);
                        return value * 1000;
                    }),
                    "2018-19": d3.sum(v, (e) => {
                        let value = convertToInt(e["2018-19  Actuals"]);
                        return value * 1000;
                    }),
                    "2017-18": d3.sum(v, (e) => {
                        let value = convertToInt(e["2017-18  Actuals"]);
                        return value * 1000;
                    }),
                    "2016-17": d3.sum(v, (e) => {
                        let value = convertToInt(e["2016-17  Actuals"]);
                        return value * 1000;
                    }),
                    "2015-16": d3.sum(v, (e) => {
                        let value = convertToInt(e["2015-16  Actuals"]);
                        return value * 1000;
                    }),
                    "2014-15": d3.sum(v, (e) => {
                        let value = convertToInt(e["2014-15  Actuals"]);
                        return value * 1000;
                    }),
                    "2013-14": d3.sum(v, (e) => {
                        let value = convertToInt(e["2013-14  Actuals"]);
                        return value * 1000;
                    }),
                    "2012-13": d3.sum(v, (e) => {
                        let value = convertToInt(e["2012-13  Actuals"]);
                        return value * 1000;
                    }),
                    "2011-12": d3.sum(v, (e) => {
                        let value = convertToInt(e["2011-12  Actuals"]);
                        return value * 1000;
                    })
                }
            }).entries(data),
    }
    return dataCleanFormat(func);
}





export const functionalArea = (data) => {

    let func = {
        key: "Functional Area",
        values: d3.nest()
            .key((d) => d.Function)
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let value = convertToInt(e["2019-20  Estimates"]);
                        return value * 1000;
                    }),
                    "2018-19": d3.sum(v, (e) => {
                        let value = convertToInt(e["2018-19  Actuals"]);
                        return value * 1000;
                    }),
                    "2017-18": d3.sum(v, (e) => {
                        let value = convertToInt(e["2017-18  Actuals"]);
                        return value * 1000;
                    }),
                    "2016-17": d3.sum(v, (e) => {
                        let value = convertToInt(e["2016-17  Actuals"]);
                        return value * 1000;
                    }),
                    "2015-16": d3.sum(v, (e) => {
                        let value = convertToInt(e["2015-16  Actuals"]);
                        return value * 1000;
                    }),
                    "2014-15": d3.sum(v, (e) => {
                        let value = convertToInt(e["2014-15  Actuals"]);
                        return value * 1000;
                    }),
                    "2013-14": d3.sum(v, (e) => {
                        let value = convertToInt(e["2013-14  Actuals"]);
                        return value * 1000;
                    }),
                    "2012-13": d3.sum(v, (e) => {
                        let value = convertToInt(e["2012-13  Actuals"]);
                        return value * 1000;
                    }),
                    "2011-12": d3.sum(v, (e) => {
                        let value = convertToInt(e["2011-12  Actuals"]);
                        return value * 1000;
                    })
                }
            }).entries(data),
    }
    return dataCleanFormat(func);
}





export const functionalArea_Agencies = (data) => {

    let func = {
        key: "Agencies",
        values: d3.nest()
            .key((d) => d.Function)
            .key((d) => d.Agency)
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let value = convertToInt(e["2019-20  Estimates"]);
                        return value * 1000;
                    }),
                    "2018-19": d3.sum(v, (e) => {
                        let value = convertToInt(e["2018-19  Actuals"]);
                        return value * 1000;
                    }),
                    "2017-18": d3.sum(v, (e) => {
                        let value = convertToInt(e["2017-18  Actuals"]);
                        return value * 1000;
                    }),
                    "2016-17": d3.sum(v, (e) => {
                        let value = convertToInt(e["2016-17  Actuals"]);
                        return value * 1000;
                    }),
                    "2015-16": d3.sum(v, (e) => {
                        let value = convertToInt(e["2015-16  Actuals"]);
                        return value * 1000;
                    }),
                    "2014-15": d3.sum(v, (e) => {
                        let value = convertToInt(e["2014-15  Actuals"]);
                        return value * 1000;
                    }),
                    "2013-14": d3.sum(v, (e) => {
                        let value = convertToInt(e["2013-14  Actuals"]);
                        return value * 1000;
                    }),
                    "2012-13": d3.sum(v, (e) => {
                        let value = convertToInt(e["2012-13  Actuals"]);
                        return value * 1000;
                    }),
                    "2011-12": d3.sum(v, (e) => {
                        let value = convertToInt(e["2011-12  Actuals"]);
                        return value * 1000;
                    })
                }
            }).entries(data),
    }
    return dataCleanFormat(func);
}











// export const fundTypes = (data) => {

//     let func = {
//         key: "Fund Types",
//         values: d3.nest()
//             .key((d) => d["Fund Type"])
//             .rollup((v) => {
//                 return {
//                     "2019-20": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2019-20  Estimates"]);
//                         return value * 1000;
//                     }),
//                     "2018-19": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2018-19  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2017-18": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2017-18  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2016-17": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2016-17  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2015-16": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2015-16  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2014-15": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2014-15  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2013-14": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2013-14  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2012-13": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2012-13  Actuals"]);
//                         return value * 1000;
//                     }),
//                     "2011-12": d3.sum(v, (e) => {
//                         let value = convertToInt(e["2011-12  Actuals"]);
//                         return value * 1000;
//                     })
//                 }
//             }).entries(data),
//     }
//     return dataCleanFormat(func);
// }



















export const fundTypes_funds = (data) => {

    let func = {
        key: "Funds",
        values: d3.nest()
            .key((d) => d["Fund Type"])
            .key((d) => d.Fund)
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let value = convertToInt(e["2019-20  Estimates"]);
                        return value * 1000;
                    }),
                    "2018-19": d3.sum(v, (e) => {
                        let value = convertToInt(e["2018-19  Actuals"]);
                        return value * 1000;
                    }),
                    "2017-18": d3.sum(v, (e) => {
                        let value = convertToInt(e["2017-18  Actuals"]);
                        return value * 1000;
                    }),
                    "2016-17": d3.sum(v, (e) => {
                        let value = convertToInt(e["2016-17  Actuals"]);
                        return value * 1000;
                    }),
                    "2015-16": d3.sum(v, (e) => {
                        let value = convertToInt(e["2015-16  Actuals"]);
                        return value * 1000;
                    }),
                    "2014-15": d3.sum(v, (e) => {
                        let value = convertToInt(e["2014-15  Actuals"]);
                        return value * 1000;
                    }),
                    "2013-14": d3.sum(v, (e) => {
                        let value = convertToInt(e["2013-14  Actuals"]);
                        return value * 1000;
                    }),
                    "2012-13": d3.sum(v, (e) => {
                        let value = convertToInt(e["2012-13  Actuals"]);
                        return value * 1000;
                    }),
                    "2011-12": d3.sum(v, (e) => {
                        let value = convertToInt(e["2011-12  Actuals"]);
                        return value * 1000;
                    })
                }
            }).entries(data),
    }
    return dataCleanFormat(func);
}






export const fpCategories = (data) => {

    let func = {
        key: "FP Categories",
        values: d3.nest()
            .key((d) => d["FP Category"])
            .rollup((v) => {
                return {
                    "2019-20": d3.sum(v, (e) => {
                        let value = convertToInt(e["2019-20  Estimates"]);
                        return value * 1000;
                    }),
                    "2018-19": d3.sum(v, (e) => {
                        let value = convertToInt(e["2018-19  Actuals"]);
                        return value * 1000;
                    }),
                    "2017-18": d3.sum(v, (e) => {
                        let value = convertToInt(e["2017-18  Actuals"]);
                        return value * 1000;
                    }),
                    "2016-17": d3.sum(v, (e) => {
                        let value = convertToInt(e["2016-17  Actuals"]);
                        return value * 1000;
                    }),
                    "2015-16": d3.sum(v, (e) => {
                        let value = convertToInt(e["2015-16  Actuals"]);
                        return value * 1000;
                    }),
                    "2014-15": d3.sum(v, (e) => {
                        let value = convertToInt(e["2014-15  Actuals"]);
                        return value * 1000;
                    }),
                    "2013-14": d3.sum(v, (e) => {
                        let value = convertToInt(e["2013-14  Actuals"]);
                        return value * 1000;
                    }),
                    "2012-13": d3.sum(v, (e) => {
                        let value = convertToInt(e["2012-13  Actuals"]);
                        return value * 1000;
                    }),
                    "2011-12": d3.sum(v, (e) => {
                        let value = convertToInt(e["2011-12  Actuals"]);
                        return value * 1000;
                    })
                }
            }).entries(data),
    }
    return dataCleanFormat(func);
}











function convertToDollar(amt) {
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