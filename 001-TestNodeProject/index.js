"use strict";

const snakeNames = require("snake-names");
const oneLinerJoke = require("one-liner-joke");
const rpgDiceRoller = require("rpg-dice-roller");
const roll1 = new rpgDiceRoller.DiceRoll("4d6");

console.log(snakeNames.badassRandom());
console.log(oneLinerJoke.getRandomJoke());
console.log(`You rolled: ${roll1}`);
