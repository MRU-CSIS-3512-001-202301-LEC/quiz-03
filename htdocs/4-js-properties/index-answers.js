console.log("objectA.firstName");
console.log(objectA.firstName);
console.log(typeof objectA.firstName);
console.log("----------");

console.log("objectA.lastName");
console.log(objectA.lastName);
console.log(typeof objectA.lastName);
console.log("----------");

console.log("objectB['importantValue']");
console.log(objectB["importantValue"]);
console.log(typeof objectB["importantValue"]);
console.log("----------");

console.log("objectB.importantValue()");
console.log(objectB.importantValue());
console.log(typeof objectB.importantValue());
console.log("----------");

console.log("objectC.penColours[1]");
console.log(objectC.penColours[1]);
console.log(typeof objectC.penColours[1]);
console.log("----------");

console.log("objectC.penColours[-1]");
console.log(objectC.penColours[-1]);
console.log(typeof objectC.penColours[-1]);
console.log("----------");

console.log("objectD.coords");
console.log(objectD.coords);
console.log(typeof objectD.coords);
console.log("----------");

console.log("objectD.coords.row");
console.log(objectD.coords.row);
console.log(typeof objectD.coords.row);
console.log("----------");

console.log("objectE.bestPal");
console.log(objectE.bestPal);
console.log(typeof objectE.bestPal);
console.log("----------");

console.log("JSON.parse(JSON.stringify(objectE))");
console.log(JSON.parse(JSON.stringify(objectE)));
console.log(typeof JSON.parse(JSON.stringify(objectE)));
console.log("----------");
