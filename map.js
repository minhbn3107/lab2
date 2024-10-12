Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const numbers = [1, 2, 3, 4];
const squared = numbers.myMap((num) => num * num);
console.log(squared);
