interface Fields{
  fieldName: string;
  fieldType: string;
  fieldPlaceholder : string;
}

interface Form{
  formName : string;
  formAction : string;
  formFields: Array<object>;
}

class JSFormBuilder implements Form{
  public formName: string;
  public formAction: string;
  public formFields : Array<Fields> = [];
  public targetDiv:string;


  constructor(private formDetail:Form , id :string){
      console.log(this.formFields);
      this.formName = formDetail.formName;
      for(let i=0;i<formDetail.formFields.length;i++){
        // console.log(formDetail.formFields[i]);
        let value : Fields = {} as any;
        for(let key in formDetail.formFields[i]){
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

  testFunction() {
      console.log(this.formFields);
      for(let i=0;i<this.formFields.length;i++){
        let node = document.createElement('li');
        let text = document.createTextNode(this.formFields[i].fieldName);
        node.appendChild(text);
        document.getElementById(this.targetDiv).appendChild(node);
      }
  }

}
