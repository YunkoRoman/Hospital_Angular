import { Component, OnInit } from '@angular/core';
import {LoginInterface} from '../Interfaces/loginInterface';
import {Response} from "../interfaces/Response";
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from "@angular/router";
import jwtDecode from 'jwt-decode';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success:any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private AuthService:AuthService,
              private router:Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  // loginUser(loginForm: LoginInterface) {
  //   this.AuthService.loginUser(loginForm).subscribe((data: Response) => {
  //     this.success = data.success;
  //     if (data.success) {
  //       localStorage.setItem('token', data.msg);
  //       const decoded = jwtDecode(data.msg);
  //       console.log(decoded);
  //
  //       //parse
  //       localStorage.setItem('user', JSON.stringify(decoded));
  //     }
  //   });
  // }



  loginUser() {
    this.submitted = true;
    this.loading = true;
    this.AuthService.loginUser(this.f.email.value, this.f.password.value).subscribe((data: Response) => {
          this.success = data.success;
          if (data.success) {
            localStorage.setItem('token', data.msg);
            const decoded = jwtDecode(data.msg);
            this.router.navigate(['']);
            console.log(decoded);
  }})}

}
