import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente7',
  templateUrl: './componente7.component.html',
  styleUrls: ['./componente7.component.css']
})
export class Componente7Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["carrito"])
  }

  regresar(){
    this.router.navigate(["register"])
  }

}
