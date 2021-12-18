/*2) colors-rgb.js apresente no console o nome da cor e o rgb.
DESAFIO: apresente o nome da cor e o codigo numa string unica
exemplo: "aliceblue - rgb: 240, 248, 255, 1"*/

const colorList = require('./colors-rgb');

for(color in colorList[0]){
    console.log(`${color} - RGB: ${colorList[0][color]}`);
    console.log('*********************-');
}