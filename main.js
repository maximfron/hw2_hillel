const USER_HEIGHT = 175;
const USER_WEIGHT = 70;

const question = prompt("You need to enter melnaye in numerical value(Yes/No)")
const tall = Number(prompt("How tall are you?"));
const weight = Number(prompt("What is your weight?"));

const bmi_tall = tall | USER_HEIGHT;
const bmi_weight = weight | USER_WEIGHT;

alert((bmi_tall / bmi_weight) ** 2);