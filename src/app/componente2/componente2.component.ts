import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  email:string
  password:string
  confirmPassword:string

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  register() {
    localStorage.setItem('mail', this.email)
    localStorage.setItem('contraseña', this.password)
    localStorage.setItem('contraseñaConf', this.confirmPassword)
  }

  regresar(){
    if(this.confirmPassword=this.password){
      this.router.navigate([""])
    }
  }

}
