import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router:Router) { }

  email1: string;
  password1: string;

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["carrito"])
  }

  tecladoM() {
    localStorage.setItem('Producto', "Teclado Mecanico")
    localStorage.setItem('Costo', "70")
  }

  mouseG() {
    localStorage.setItem('Producto', "Mouse Gamer")
    localStorage.setItem('Costo', "60")
  }

  tabletaG() {
    localStorage.setItem('Producto', "Tableta Grafica")
    localStorage.setItem('Costo', "100")
  }

  Laptop() {
    localStorage.setItem('Producto', "Asus Tuf Gaming")
    localStorage.setItem('Costo', "1500")
  }

  Pad() {
    localStorage.setItem('Producto', "Mouse Pad")
    localStorage.setItem('Costo', "15")
  }

  SillaG() {
    localStorage.setItem('Producto', "Silla Gamer")
    localStorage.setItem('Costo', "150")
  }

  recup(){
    this.email1 = localStorage.getItem('mail1')
    this.password1 = localStorage.getItem('contraseñaConf1')
  }

  teclado(){
    this.router.navigate(["teclado"])
  }

  mouse(){
    this.router.navigate(["mouse"])
  }

  tableta(){
    this.router.navigate(["tableta"])
  }
  
  asus(){
    this.router.navigate(["asus"])
  }

  pad(){
    this.router.navigate(["pad"])
  }

  silla(){
    this.router.navigate(["silla"])
  }

  cerrar(){
    this.router.navigate([""])
  }
}
