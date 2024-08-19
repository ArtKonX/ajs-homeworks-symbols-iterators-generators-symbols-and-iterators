import Team from '../classes/Team';

let team;

const magician = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
};

const daemon = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
};

const swordsman = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
};

const characters = [
    magician,
    daemon,
    swordsman
];

beforeEach(() => {
    team = new Team();
});

test('Добавление одного персонажа', () => {
    team.add(magician);
    expect(team.toArray()).toContain(magician);
});

test('Добавление нескольких персонажей', () => {
    team.addAll(...characters);
    expect(team.toArray()).toEqual(characters);
});

test('Добавление повторяющихся персонажа с несколькими', () => {
    team.addAll(...characters);
    team.addAll(...characters);
    expect(team.toArray()).toEqual(characters);
});

test('Добавление существующего персонажа', () => {
    team.add(magician);
    expect(() => {
        team.add(magician);
    }).toThrow('Такой персонаж уже существует в команде');
});

test('Перебор всех членов команды', () => {

    team.add(magician);
    team.add(daemon);
    team.add(swordsman);

    const teamMembers = [];
    for (const member of team) {
        teamMembers.push(member);
    }

    expect(teamMembers).toEqual([magician, daemon, swordsman]);
});

test('Пустая команда', () => {
    const teamMembers = [];
    for (const member of team) {
        teamMembers.push(member);
    }
    expect(teamMembers).toEqual([]);
});

test('Проверка неизменности исходной команды', () => {

    team.add(magician);
    team.add(daemon);
    team.add(swordsman);

    const teamIterator = team[Symbol.iterator]();
    expect(teamIterator.next().value).toBe(magician);
    expect(teamIterator.next().value).toBe(daemon);
    expect(teamIterator.next().value).toBe(swordsman);
    expect(teamIterator.next().done).toBe(true);

    expect(team.toArray()).toEqual([magician, daemon, swordsman]);
});