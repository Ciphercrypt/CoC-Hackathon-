const Validator = require("validator");
const isEmpty = require("./is-empty");

const ValidateSearch = (data) => {
  let isvalid=true;

  console.log(data);
    if (!data) isvalid= false;
    if (!/^\d{4}$/.test(data)) isvalid= false;
    const currentYear = new Date().getFullYear();
    const date = new Date(data, 0, 1);
    if(!(date instanceof Date) || isNaN(date)) isvalid= false;
    isvalid= date >= new Date(1900, 0, 1) && date <= new Date(currentYear, 11, 31);
  
  return {
  
    isValid: isvalid,
  };
}

module.exports = ValidateSearch;
