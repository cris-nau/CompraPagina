import { Componente2Component } from './../componente2/componente2.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  email: string;
  password: string;
  email1: string;
  password1: string;
  emailC: string;
  passwordC: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
    this.password1 = localStorage.getItem('contraseñaConf')
  }

  compro(){
    if((this.email=this.email1) && (this.password=this.password1)){
      this.router.navigate(["register"])
    }
  }

}
