import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  templateUrl: './painel-admin.html',
  styleUrls: ['./painel-admin.css']
})

export class PainelAdmin {

  constructor(
    private router: Router
  ) {}

  voltarDashboard(): void {

    this.router.navigate([
      '/dashboard'
    ]);

  }

}