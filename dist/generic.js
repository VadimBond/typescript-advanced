"use strict";
const car1 = ['Ford', 'Audi'];
const car2 = ['Ford', 'Audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged1 = mergeObjects({ name: 'Vadim' }, { age: 37 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2019 });
function withCount(value) {
    return {
        value,
        count: `${value.length} symbols`
    };
}
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Vadim',
    age: 37
};
//# sourceMappingURL=generic.js.map