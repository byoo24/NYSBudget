import * as d3 from 'd3';


const convertToInt = (str) => {
    let num = str.replace(/[$,]/g, "");
    return parseInt(num);
}



function dataCleanFormat(data) {
    let cleanData = {
        name: data.key,
        sub: [],
        values: []
    };

    if (data.value) {
        cleanData.sub = null;
        
        for (let key in data.value) {
            let newObj = {
                name: key,
                value: data.value[key]
            }
            cleanData.values.push(newObj);
        }
    } else if (data.values) {
        
        data.values.forEach((obj) => {

            let innerObj = dataCleanFormat(obj);
            cleanData.sub.push(innerObj);

            if (cleanData.values.length < 1) {

                // deep dup
                innerObj.values.forEach((obj) => {
                    let newObj = {};

                    for (let key in obj) {
                        newObj.name = obj.name;
                        newObj.value = obj.value;
                    }
                    cleanData.values.push(newObj);
                })

            } else {

                for (let i = 0; i < cleanData.values.length; i++) {
                    let num1 = cleanData.values[i].value;
                    let num2 = innerObj.values[i].value;
                    cleanData.values[i].value = num1 + num2;
                }
            }
        });
    }
    return cleanData;
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
    // return dataCleanFormat(func);


    let cleanData = dataCleanFormat(func);

    cleanData.sub.forEach((level1) => {

        level1.sub = level1.sub.filter(function (x) {
            return x.values[0].value > 0;
        });

        level1.sub.sort(function (x, y) {
            return d3.descending(x.values[0].value, y.values[0].value);
        });
    });

    cleanData.sub.sort(function (x, y) {
        return d3.descending(x.values[0].value, y.values[0].value);
    });
    
    return cleanData;
}



















export const fundTypes = (data) => {

    let func = {
        key: "Fund Types",
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


    let cleanData = dataCleanFormat(func);

    cleanData.sub.forEach((level1) => {

        level1.sub = level1.sub.filter(function (x) {
            return x.values[0].value > 0;
        });

        level1.sub.sort(function (x, y) {
            return d3.descending(x.values[0].value, y.values[0].value);
        });
    });

    cleanData.sub.sort(function (x, y) {
        return d3.descending(x.values[0].value, y.values[0].value);
    });

    return cleanData;

    
}






export const fpCategories = (data) => {

    let func = {
        key: "Financial Planning",
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

    let cleanData = dataCleanFormat(func);
    
    cleanData.sub = cleanData.sub.filter(function (x) {
        return x.values[0].value > 0;
    });

    cleanData.sub.sort(function (x, y) {
        return d3.descending(x.values[0].value, y.values[0].value);
    });

    return cleanData;
}






