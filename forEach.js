Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers = [1, 2, 3, 4];
numbers.myForEach((num, index) => console.log(`Index ${index}: ${num}`));
