import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxSpinnerModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  email = 'owonohermann54@gmail.com';
  phone = '696052700';
  linkSuccess = false;

  constructor(
    private spinner: NgxSpinnerService,
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
      
  }

  async signIn() {
    this.spinner.show();
    const result = await this.auth.signInWithEmail(this.email);

    this.spinner.hide();
    if (!result.error) {
      this.linkSuccess = true;
    } else {
      alert(result.error.message);
    }
  }

}
