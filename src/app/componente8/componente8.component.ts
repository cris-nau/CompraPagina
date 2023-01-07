import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente8',
  templateUrl: './componente8.component.html',
  styleUrls: ['./componente8.component.css']
})
export class Componente8Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["carrito"])
  }

  regresar(){
    this.router.navigate(["register"])
  }

  cerrar(){
    this.router.navigate([""])
  }

  Laptop() {
    localStorage.setItem('Producto', "Asus Tuf Gaming")
    localStorage.setItem('Costo', "1500")
  }

}
