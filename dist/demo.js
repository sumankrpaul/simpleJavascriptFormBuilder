var JSFormBuilder = (function () {
    function JSFormBuilder(formDetail, id) {
        this.formDetail = formDetail;
        this.formFields = [];
        console.log(this.formFields);
        this.formName = formDetail.formName;
        for (var i = 0; i < formDetail.formFields.length; i++) {
            // console.log(formDetail.formFields[i]);
            var value = {};
            for (var key in formDetail.formFields[i]) {
                console.log(formDetail.formFields[i][key]);
                value[key] = formDetail.formFields[i][key];
                // console.log(value);
            }
            console.log(value);
            this.formFields.push(value);
        }
        // this.formFields = formDetail.formFields;
        this.targetDiv = id;
    }
    JSFormBuilder.prototype.testFunction = function () {
        console.log(this.formFields);
        for (var i = 0; i < this.formFields.length; i++) {
            var node = document.createElement('li');
            var text = document.createTextNode(this.formFields[i].fieldName);
            node.appendChild(text);
            document.getElementById(this.targetDiv).appendChild(node);
        }
    };
    return JSFormBuilder;
}());
