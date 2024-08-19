import Character from "./classes/Character.js";
import Team from "./classes/Team.js";

const charFirst = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
};

const charSecond = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
};

const charThird = {
    name: 'Маг',
    type: 'Magician',
    health: 80,
    level: 1,
    attack: 40,
    defence: 10
};

const newCharFirst = new Character(charFirst);
const newCharSecond = new Character(charSecond);
const newCharThird = new Character(charThird);

const newTeam = new Team();
newTeam.add(newCharFirst);
newTeam.add(newCharSecond);
newTeam.add(newCharThird);

for (const char of newTeam) {
    console.log(char)
}
