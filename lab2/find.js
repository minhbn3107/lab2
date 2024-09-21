Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

const numbers = [1, 2, 3, 4];
const firstEven = numbers.myFind((num) => num % 2 === 0);
console.log(firstEven);
