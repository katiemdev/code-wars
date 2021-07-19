//You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.
const areaCode = (text) => text.match(/\(\d\d\d\)/g)[0].slice(1, -1);
