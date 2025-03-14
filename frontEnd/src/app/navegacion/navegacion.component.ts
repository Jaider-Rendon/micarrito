import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule], 
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent implements OnInit {
  ver: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ver = this.router.url === '/';
      }
    });
  }

  abrirsesion() {
    this.router.navigate(['/login']);
  }

  Registro() {
    this.router.navigate(['/register']);
  }
}
