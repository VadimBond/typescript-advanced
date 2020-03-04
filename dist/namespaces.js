"use strict";
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.myForm = new MyForm('vadim@mail.ru');
    console.log(Form.myForm.getInfo());
})(Form || (Form = {}));
console.log(Form.myForm);
//# sourceMappingURL=namespaces.js.map