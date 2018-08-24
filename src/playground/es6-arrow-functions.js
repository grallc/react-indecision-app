const user = {
    name: 'Corentin',
    cities: ['Nantes', 'San Francisco', 'London'],
    printPlacesLived() {
        const cityMessage = this.cities.map((city) => `${this.name} has lived in ${city}.`);
        return cityMessage;

        // Print all elements
        // this.cities.forEach((city) => {
        //     console.log(`${this.name} has lived in ${city}.`)
        // });
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2565, 888],
    multiplyBy: 255,
    multiply() {
        const results = this.numbers.map((number) => number*this.multiplyBy);
        return results;
    }
    // number - array of numbers
    // multiplyBy - dignelNumber
    // multiply - return a new array where the numbers have been multiplied
};

console.log(multiplier.multiply());