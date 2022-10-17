#!/usr/bin/env node
const lib = require('./lib');

if(process.argv.length <= 3){
    console.log("Insufficient Parameter!");
    process.exit(1);
}
//first two array indices will contain file path
let command = process.argv[2];

let numbers = process.argv
            //gives values from 3 to the end of process.argv
            .slice(3, process.argv.length)
            //gives NaN if not a number
            .map((n) => parseFloat(n));

if(numbers.some((n) => isNaN(n))){
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command){
    case "sum":
    case "avg":
    case "max":
    case "med":
    case "iqr":
    case "outlier":
        result = lib[command](numbers)
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

if(Array.isArray(result))
{
    if(result.length === 0)
    {
        return;
    }
    else
    {
        result.sort((x,y) => y - x);
        result.forEach((x) => console.log(x));
    }
}
else
{
    console.log(result);
}