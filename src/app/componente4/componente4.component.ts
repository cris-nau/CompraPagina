import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  constructor(private router:Router) { }

  product1: string;
  cost1: string;
  product2: string;
  cost2: string;
  product3: string;
  cost3: string;
  product4: string;
  cost4: string;
  product5: string;
  cost5: string;
  product6: string;
  cost6: string;
  total:number;
  a:number;
  b:number;
  c:number;
  d:number;
  e:number;
  f:number;

  ngOnInit(): void {
    this.recup()
    this.compraP()
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

  recup(){
    this.product1 = localStorage.getItem('Producto1')
    this.cost1 = localStorage.getItem('Costo1')
    this.product2 = localStorage.getItem('Producto2')
    this.cost2 = localStorage.getItem('Costo2')
    this.product3 = localStorage.getItem('Producto3')
    this.cost3 = localStorage.getItem('Costo3')
    this.product4 = localStorage.getItem('Producto4')
    this.cost4 = localStorage.getItem('Costo4')
    this.product5 = localStorage.getItem('Producto5')
    this.cost5 = localStorage.getItem('Costo5')
    this.product6 = localStorage.getItem('Producto6')
    this.cost6 = localStorage.getItem('Costo6')


    this.a = Number(this.cost1)
    this.b = Number(this.cost2)
    this.c = Number(this.cost3)
    this.d = Number(this.cost4)
    this.e = Number(this.cost5)
    this.f = Number(this.cost6)

    this.total = this.a + this.b + this.c +this.d + this.e + this.f;
  }

  compraP(){
    localStorage.removeItem("Costo1")
  }

}
