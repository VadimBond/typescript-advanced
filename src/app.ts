// http://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options

class Person {
  constructor(private name: string) {}
}

const vad = new Person("Vadim");

const btn: Element = document.querySelector("#btn")!;
btn.addEventListener("click", () => {
  console.log("Btn clicked!");
});
