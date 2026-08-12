const xlsx = require('xlsx');
const wb = xlsx.readFile('public/Subcategory/Uniview_Full_Details_4_Models.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);
console.log(JSON.stringify(data, null, 2));
