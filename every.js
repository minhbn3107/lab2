Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

const numbers = [2, 4, 6];
const allEven = numbers.myEvery((num) => num % 2 === 0);
console.log(allEven);
