import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name ="";
  pass = "";
  conPass="";
  constructor() { }

  ngOnInit(): void {
  }
  getValues(val : any)
  {
    console.log(val.name);
    console.log(val.pass);
  }
}
