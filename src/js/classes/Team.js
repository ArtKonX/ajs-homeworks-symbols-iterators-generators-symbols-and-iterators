export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) throw new Error('Такой персонаж уже существует в команде');
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            if (!this.members.has(character)) {
                this.members.add(character);
            }
        });
    }

    toArray() {
        return [...this.members];
    }

    [Symbol.iterator]() {
        const membersList = Array.from(this.members);

        let current = 0;

        const lengthMembers = membersList.length;

        return {
            next() {
                if (current < lengthMembers) {
                    return {
                        done: false,
                        value: membersList[current++]
                    }
                }

                return {
                    done: true
                }
            }
        }
    }
}