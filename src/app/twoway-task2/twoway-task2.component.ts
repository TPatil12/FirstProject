import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-task2',
  templateUrl: './twoway-task2.component.html',
  styleUrls: ['./twoway-task2.component.css']
})
export class TwowayTask2Component {



  // .......................CODE.....................


  name = "";
  age = 0;
  gender = "";
  imagecontent:any;
  qualification = "";
  myHobbies = new Array();

  genders = ["Male", "Female", "Other"];

  show = false;

  qulifications = ["DIPLOMA", "B-TECH", "MCA", "MCOM", "BCOM", "BSC", "BE", "BCA"];

  hobbies = [
      {name:"Cricket", checked:true}, 
      {name:"Bike Riding", checked:false}, 
      {name:"Swimming", checked:true}, 
      {name:"Share Marketing", checked:false}
    ];

    hobbyChanged(event:Event){
      for(let i = 0; i < this.hobbies.length; i++){
        if((<HTMLInputElement>event.target).value == this.hobbies[i].name){
          if((<HTMLInputElement>event.target).checked){
            this.hobbies[i].checked = true;
          }
          else{
            this.hobbies[i].checked = false;
          }
        }
        
      }
    }

    fileChoose(event:Event){
      let file = <any>event.target;
      let fr = new FileReader();
      fr.readAsDataURL(file.files[0]);
      fr.onload = (e:any)=>{
        this.imagecontent = e.target.result;
      }
    }

  save() {
    this.show = false;
    if(this.name.trim() == ""){
      alert("Enter name");
      return;
    }
    if(this.age == null){
      alert("Enter age");
      return;
    }
    if(this.gender == ""){
      alert("Select gender");
      return;
    }
    if(this.qualification == ""){
      alert("Select qualification");
      return;
    }
    let count = 0;
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i].checked == true){
        count++;
      } 
    }
    if(count == 0){
      alert("Select atlest one hobby");
      return;
    }
    if(this.imagecontent == null){
      alert("Select image");
      return;
    }
    this.show = true;
    this.myHobbies = new Array();
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i].checked == true){
        this.myHobbies.push(this.hobbies[i].name);
      } 
    }

  }

}


  // ..................CODE CLOSE...............

  

  // name= "";
  // txtName ="";

  // age = 0;
  // selectedAge = 0;


  // genders = ["MALE" , "FEMALE"];
  // selectedGender ="" ;
  // Gender ="";



  // qualifications =["Select please","BCA","BBA","BCOM","BSC","MCA","MBA","MCOM","MSC"];
  // selectedQualification = "Select please";
  // qualification = "";


  // hobbies = ["CRECKET", "SWIMMING", "FOOTBALL" ,"BADMINTON"];
  // selectedHobbies1 = "";
  // selectedHobbies2 = "";
  // selectedHobbies3 = "";
  // selectedHobbies4 = "";

  // hobbie1 ="";
  // hobbie2 ="";
  // hobbie3 ="";
  // hobbie4 ="";



  // submit(){

  //   this.name=this.txtName;
  //   console.log(this.name);


  //   this.age =this.selectedAge;
  //   console.log(this.age);
    

  //   this.Gender= this.selectedGender;
  //   console.log(this.Gender);


  //   this.qualification = this.selectedQualification;
  //   console.log(this.qualification);


  //   this.hobbie1 = this.selectedHobbies1;
  //   console.log(this.hobbie1);

  //   this.hobbie2 = this.selectedHobbies2;
  //   console.log(this.hobbie2);
  //   this.hobbie3 = this.selectedHobbies3;
  //   console.log(this.hobbie3);
  //   this.hobbie4 = this.selectedHobbies4;
  //   console.log(this.hobbie4);
    
  // }
  
// }
