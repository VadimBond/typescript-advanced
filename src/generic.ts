// generic

const car1: string[] = ['Ford', 'Audi'];
const car2: Array<string> = ['Ford', 'Audi'];
// ======================================

const promise: Promise<string> = new Promise(resolve => {  // new Promise<string>
  setTimeout(() => {
    resolve('Promise resolved')
  }, 2000)
});

// promise.then(data => {
//   console.log(data.trim().toUpperCase())
// });
// =========================================

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
}

const merged1 = mergeObjects({name: 'Vadim'}, {age: 37});
const merged2 = mergeObjects({model: 'Ford'}, {year: 2019});
//const merged3 = mergeObjects({num: 5}, 'str');  // error!
// ===========================================

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `${value.length} symbols`
  }
}

// console.log(withCount('Hi TS!'));
// console.log(withCount(['I', 'am', 'array']));
// console.log(withCount({length: 7}));
// console.log(withCount(20));  // error!
// ===========================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: 'Vadim',
  age: 37
};

// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));  // error!
// ==========================================================

class Collection<T extends (number | string | boolean)> {
  // private _items: T[] = [];
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(['I', 'Am', 'String']);
strings.add('!!!');
strings.remove('Am');
// console.log(strings.items);

const numbers = new Collection<number>([1, 3, 7]);
numbers.add(9);
numbers.remove(3);
// console.log(numbers.items);

// const objs = new Collection([{a: 1}, {b: 2}]);
// objs.remove({b: 2});
// console.log(objs.items);  // [{a: 1}, {b: 2}] error!
// ========================================================
