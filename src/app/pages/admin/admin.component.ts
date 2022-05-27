import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userdetails = [] as any;
  edituser: any;
  adduser: any;
  constructor() { }

  ngOnInit(): void {
    this.allStorage();

    this.adduser = new FormGroup ({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    })

  this.edituser = new FormGroup ({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  })
  }

  allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])|| ''));
    }
    this.userdetails = values;
    console.log(this.userdetails);
}

add(){
  this.adduser.setValue({
    firstname: this.edituser.value.firstname,
    lastname: this.edituser.value.lastname,
    username: this.edituser.value.username,
    password: this.edituser.value.password,
  })
}

saveuser(){
  var user = this.adduser.value.username;
  this.adduser.value['role'] = "user"
  localStorage.setItem(user, JSON.stringify(this.adduser.value));
  this.adduser.reset();
  this.userdetails();
  location.reload();
}
  
edit(i: any){
this.edituser.setValue({
  firstname: this.userdetails[i].firstname,
  lastname: this.userdetails[i].lastname,
  username: this.userdetails[i].username,
  password: this.userdetails[i].password
}) 
}

saveedit(){
  var user = this.edituser.value.username;
  localStorage.setItem(user, JSON.stringify(this.edituser.value));
  this.edituser.reset();
  this.userdetails();
  location.reload();
}

// delete user from local storage
delete(i: any){
  localStorage.removeItem(this.userdetails[i].username);
  this.allStorage();
}
}
