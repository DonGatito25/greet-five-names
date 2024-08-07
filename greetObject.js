const greet = require('./greet.js')
const farewell = require('./farewell.js')

const nameObj = {
    name1: "Cyborg",
    name2: "Producer",
    name3: "Explosives",
    name4: "Captain",
    name5: "Scar",
    name6: "Ninja",
    name7: "Echo",
    name8: "Elder",
    name9: "Novice",
    name10: "9E",
    name11: "6A",
    name12: "Trader",
    name13: "Vex",
};

const nameObj2 = {
    key1: "value1",
    key2: "Value2"
};

function hiBye(obj) {
    for (let name in obj) {
        greet(obj[name]);
    };
    for (let name in obj) {
        farewell(obj[name]);
    };
};
hiBye(nameObj2)