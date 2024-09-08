import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  email = '';
  phone = '';
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
    const result = await this.auth.signInWithEmail(this.email, this.phone);

    this.spinner.hide();
    if (!result.error) {
      this.linkSuccess = true;
    } else {
      alert(result.error.message);
    }
  }

}
