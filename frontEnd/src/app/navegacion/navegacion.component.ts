import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
ver: boolean

constructor(private router:Router){
 this.ver = true;
}  


  abrirsesion(){
    this.ver = false;
    this.router.navigate(['./login'])

  }
  Registro(){
    this.router.navigate(['./register'])
  }

}

