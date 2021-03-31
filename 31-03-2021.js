//Your task is to check if the gunners are loaded and ready, if they are: Fire! If they aren't ready: Shiver me timbers!
const cannonsReady = (gunners) => {
    let arr = []
    for(let prop in gunners) {
      arr.push(gunners[prop])
    }
    return arr.every(item => item === "aye") ? "Fire!" : "Shiver me timbers!"
  }

//if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"
function leo(oscar){
    return oscar === 88 ? "Leo finally won the oscar! Leo is happy"
    : oscar === 86 ? "Not even for Wolf of wallstreet?!"
    : oscar < 88 ? "When will you give Leo an Oscar?"
    : "Leo got one already!"
  }

//In this kata, we will make a function to test whether a period is late. Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
function periodIsLate(last, today, cycleLength){ 
    let difference = Math.ceil((today - last) / (1000 * 60 * 60 * 24))
    return difference > cycleLength
  }