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
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'String']);
strings.add('!!!');
strings.remove('Am');
const numbers = new Collection([1, 3, 7]);
numbers.add(9);
numbers.remove(3);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Audi', 'Ford'];
const ford = {
    model: 'Ford',
    year: 2005
};
//# sourceMappingURL=generic.js.map