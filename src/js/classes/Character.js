export default class Character {
    static types = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
    ]

    constructor(char) {
        if (typeof char.name === 'string' && char.name.length >= 2 && char.name.length <= 10) {
            this.name = char.name;
        } else {
            throw new Error('Имя должно быть строкой и от 2 до 10 символов!')
        }

        if (typeof char.type === 'string' && Character.types.includes(char.type)) {
            this.type = char.type;
        } else {
            throw new Error(`Тип персонажа должен быть ${this.types.join(' ')}`)
        }

        this.health = char.health;
        this.level = char.level;
        this.attack = char.attack;
        this.defence = char.defence;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего(')
        }

        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('Персонаж умер(')
        }

        this.health -= points * (1 - this.defence / 100);
    }
}