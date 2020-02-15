"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const vad = new Person("Vadim");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("Btn clicked!");
});
//# sourceMappingURL=app.js.map