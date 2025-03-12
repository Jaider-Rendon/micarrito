import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

constructor(private router:Router){

}  


  abrirsesion(){
    
    this.router.navigate(['./login'])

  }
  Registro(){
    this.router.navigate(['./register'])
  }

}

