// namespaces

/// <reference path="form-namespace.ts" />

namespace Form {
  class MyForm {
    private type: FormType = 'inline';
    private state: FormState = 'active';

    constructor(public email: string) {
    }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  export const myForm = new MyForm('vadim@mail.ru');
  console.log(myForm.getInfo());
}

console.log(Form.myForm);
