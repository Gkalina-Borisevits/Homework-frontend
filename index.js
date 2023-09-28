const arrayName = ["Семен", "Иван", "Петр", "Татьяна"];
const arrayAge = [18, 27, 74, 34];

const arrayNameAge = [];

for (let i = 0; i < arrayName.length; i++) {
    const name = arrayName[i];
    const age = arrayAge[i];
    const nameAge = `${name} ${age} ${age % 2 ? "лет" : "года"}`;
    arrayNameAge.push(nameAge);
}

console.log(arrayNameAge);