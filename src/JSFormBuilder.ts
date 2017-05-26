interface Fields{
  name: string;
  type: string;
  placeholder : string;
  label : string;
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

      // console.log(this.formFields);
      this.formName = formDetail.formName;
      for(let i=0;i<formDetail.formFields.length;i++){
        // console.log(formDetail.formFields[i]);
        let value : Fields = {} as any;
        this.formName = formDetail.formName;
        this.formAction = formDetail.formAction;

        for(let key in formDetail.formFields[i]){
          value[key] = formDetail.formFields[i][key];
          // console.log(value);
        }
        console.log(value);
        this.formFields.push(value);
      }
      // this.formFields = formDetail.formFields;
      this.targetDiv = id;
  }

  buildForm(){
    let form = document.createElement('form');
    form.setAttribute('action',this.formAction);
    form.setAttribute('name',this.formName);
    for(let index in this.formFields){
      let field : any = {},label : any = null, text : any = {};
      field = document.createElement('input');
      for(let key in this.formFields[index]){
        if(key.toLowerCase() != 'label'){
          console.log(key);
          field.setAttribute(key,this.formFields[index][key]);
        }else{
          label = document.createElement('label');
          text = document.createTextNode(this.formFields[index][key]);
          label.appendChild(text);
        }
      }
      if(label != null){
        console.log(label);
        form.appendChild(label);
        label = null;
      }
      form.appendChild(field);
      form.appendChild(document.createElement('br'));
    }
    document.getElementById(this.targetDiv).appendChild(form);
  }

  testFunction() {
      console.log(this.formFields);
      this.buildForm();
      // for(let i=0;i<this.formFields.length;i++){
      //   let node = document.createElement('li');
      //   let text = document.createTextNode(this.formFields[i].name);
      //   node.appendChild(text);
      //   document.getElementById(this.targetDiv).appendChild(node);
      // }
  }

}
