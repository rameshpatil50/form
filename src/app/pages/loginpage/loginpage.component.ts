import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm: any;
  registerForm: any;
  users = [] as any;
  constructor(private route: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup ({
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
      role: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    })
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
    if (localStorage.getItem('user')) {
      this.route.navigate(['/home']);
    };
  }

  login() {
    if (this.loginForm.valid) {
      let user = this.loginForm.value.username;
      this.users = localStorage.getItem(user);
      if (this.users) {
        this.users = JSON.parse(this.users);
        if (this.loginForm.value.password === this.users.password) {
          localStorage.setItem('logeduser', JSON.stringify(this.users));
          if (this.users.role === 'admin') {
            this.route.navigate(['home/admin']);
          }
          else {
            this.route.navigate([`home/u/${user}`]);
          }
            }
        else {
          this.toastr.error('Password is incorrect');
        }
  }
  else {
    this.toastr.error('User is not registered');
  }
 }
}

  register(){
    let user = this.registerForm.value.username;
    localStorage.setItem(user, JSON.stringify(this.registerForm.value));
    this.registerForm.reset();
    this.toastr.success('Registions Successfully', 'Success');
  }
  }


