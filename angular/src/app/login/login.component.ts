import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private httpclient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.httpclient.post('http://localhost:4000/authenticate', { username: this.username , password: this.password }).subscribe((r: any) => {
      localStorage.setItem('token', r.token);
      this.router.navigate(['']);
    }, (error) => {
      console.log(`error`);
    });
  }
}
