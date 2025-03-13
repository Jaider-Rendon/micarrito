import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent implements OnInit {
ver: boolean

constructor(private router:Router){
 this.ver = true;
}  
  ngOnInit(): void {
  }


  abrirsesion(){
    this.ver = false;
    this.router.navigate(['./login'])

  }
  Registro(){
    this.ver=false;
    this.router.navigate(['./register'])
  }

}

