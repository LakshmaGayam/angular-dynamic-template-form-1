import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  addressArray:Array<any> = [];
  employee:Employee = new Employee();
  addressObj:address = new address();
ngOnInit(){
  // this.addSingele();
 this.addressObj = new address();
  this.addressArray.push(this.addressObj);
}
// addSingele(){
//   this.addressArray.push(this.employee.address)
// }
add(){
  this.addressObj = new address();
  this.addressArray.push(this.addressObj);
}

submit(){
console.log(this.addressObj)
}

}
  

 class Employee {
  name: string;
  id: string;
} 
class address {
  state: string;
  pin: string;
}