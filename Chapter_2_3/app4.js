function greeting() {
    return 'Hello!';
}

let calculate = {
    duplicate: function(v1) {
        return v1 * 2;
    },
    divide: function(v1) {
        return v1 / 2;
    },
}

console.log(greeting());
console.log(calculate.divide(100), calculate.duplicate(100));
