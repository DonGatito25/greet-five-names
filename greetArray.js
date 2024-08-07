const namesArr = ["Cyborg", "Producer", "Explosives", "Captain", "Scar", "Ninja", "Echo", "Elder", "9E", "6A", "Trader", "Vex",];
const namesArr2 = ["Santiago", "Levi", "Isaac", "Leo-Juan", "Daniel"];


function listNames(array) {
    array.forEach((name) => {
        console.log(`Hello, ${name}.`);
    });
};

listNames(namesArr);
listNames(namesArr2);

global.namesArr = namesArr;
global.namesArr2 = namesArr2
global.listNames = listNames;