// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go hiking")); // "This Saturday, I want to go hiking!"

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
