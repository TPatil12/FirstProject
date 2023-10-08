import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding-assignment',
  templateUrl: './twowaybinding-assignment.component.html',
  styleUrls: ['./twowaybinding-assignment.component.css']
})
export class TwowaybindingAssignmentComponent {

  quarters = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
  months = ["April", "May", "June"];

  selectedquarter = "Quarter 1";
  selectedmonth = "April";        

  quarterChanged(){
    if(this.selectedquarter == "Quarter 1"){
      this.months = ["April", "May", "June"];
      this.selectedmonth = "April"
    }
    else if(this.selectedquarter == "Quarter 2"){
      this.months = ["July", "August", "September"];
      this.selectedmonth = "July"
    }
    else if(this.selectedquarter == "Quarter 3"){
      this.months = ["October", "November", "December"];
      this.selectedmonth = "October"
    }
    else{
      this.months = ["January", "February", "March"];
      this.selectedmonth = "January"
    }
  }

}
