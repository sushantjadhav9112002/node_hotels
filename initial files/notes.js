const { Module } = require("module");

const age =10;

function addNumber(a,b){
    return a+b;
}


module.exports = {
    age,addNumber
}