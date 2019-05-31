const xlsx = require('node-xlsx');
const func = require('./func.js')

const file = xlsx.parse("./test.xlsx");
func.printTable(file)