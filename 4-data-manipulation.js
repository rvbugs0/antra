const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];
const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];

function name_roles_join() {
  let expect = [];
  for (let i = 0; i < names.length; i++) {
    let user_id = names[i].userid;
    role_obj = roles.find((obj) => obj.userid == user_id);
    let new_object = JSON.parse(JSON.stringify(names[i]));
    if (role_obj) {
      new_object["role"] = role_obj.role;
    } else {
      new_object["role"] = null;
    }
    expect.push(new_object);
  }
  return expect;
}

console.log(name_roles_join());

// const callback1 = (a) => a + 2; // 6
// const callback2 = (b) => b * 2; // 12
// const callback3 = (c) => c - 2; // 10

// function runAll(initNum) {
//   return function (...args) {};
// }

// console.log(runAll(4)(callback1, callback2, callback3)); // 10

source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];

function convertToObject(src) {
  let result = [];
  for (let i = 0; i < src.length; i++) {
    let current = src[i];
    let ref = result;
    for (let j = 0; j < current.length; j++) {
      let key = current[j];

      let obj_found = ref.find((obj) => obj.name == key);
      if (obj_found) {
        ref = obj_found.children;
      } else {
        let new_obj = {
          name: key,
          children: [],
        };

        ref.push(new_obj)
        ref = new_obj.children
        
        
      }
    }
  }
  return result;
}


console.log(JSON.stringify(convertToObject(source)))