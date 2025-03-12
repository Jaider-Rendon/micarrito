import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
