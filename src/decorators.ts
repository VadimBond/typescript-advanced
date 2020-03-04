// decorators

function Log(constructor: Function) {
  console.log('Log: ', constructor);
}

function Log2(target: any, propName: string | Symbol) {
  console.log('Log2: ', target);
  console.log('Log2: ', propName);
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Log3: ',target);
  console.log('Log3: ',propName);
  console.log('Log3: ',descriptor);
}

@Log
class Component {
  @Log2
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log3
  get componentName() {
    return this.name;
  }

  @Log3
  logName(): void {
    console.log(`Component Name: ${this.name}`);
  }
}

const myComponent = new Component('MyComponent');
myComponent.logName();
