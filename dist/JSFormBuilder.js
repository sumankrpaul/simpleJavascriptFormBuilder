var JSFormBuilder = (function () {
    function JSFormBuilder(formDetail, id) {
        this.formDetail = formDetail;
        this.formFields = [];
        // console.log(this.formFields);
        this.formName = formDetail.formName;
        for (var i = 0; i < formDetail.formFields.length; i++) {
            // console.log(formDetail.formFields[i]);
            var value = {};
            this.formName = formDetail.formName;
            this.formAction = formDetail.formAction;
            for (var key in formDetail.formFields[i]) {
                value[key] = formDetail.formFields[i][key];
                // console.log(value);
            }
            console.log(value);
            this.formFields.push(value);
        }
        // this.formFields = formDetail.formFields;
        this.targetDiv = id;
    }
    JSFormBuilder.prototype.buildForm = function () {
        var form = document.createElement('form');
        form.setAttribute('action', this.formAction);
        form.setAttribute('name', this.formName);
        for (var index in this.formFields) {
            var field = {}, label = null, text = {};
            field = document.createElement('input');
            for (var key in this.formFields[index]) {
                if (key.toLowerCase() != 'label') {
                    console.log(key);
                    field.setAttribute(key, this.formFields[index][key]);
                }
                else {
                    label = document.createElement('label');
                    text = document.createTextNode(this.formFields[index][key]);
                    label.appendChild(text);
                }
            }
            if (label != null) {
                console.log(label);
                form.appendChild(label);
                label = null;
            }
            form.appendChild(field);
            form.appendChild(document.createElement('br'));
        }
        document.getElementById(this.targetDiv).appendChild(form);
    };
    JSFormBuilder.prototype.testFunction = function () {
        console.log(this.formFields);
        this.buildForm();
        // for(let i=0;i<this.formFields.length;i++){
        //   let node = document.createElement('li');
        //   let text = document.createTextNode(this.formFields[i].name);
        //   node.appendChild(text);
        //   document.getElementById(this.targetDiv).appendChild(node);
        // }
    };
    return JSFormBuilder;
}());
