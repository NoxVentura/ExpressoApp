import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private angularfireauth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private router: Router,
    private toaster: ToastController,
    private angularfirestore: AngularFirestore
  ) {}

  ngOnInit() {}

  async resetPassword() {
    if (this.email) {
      const loading = await this.loadingCtrl.create({
        message: 'Sending reset password link...',
        spinner: 'crescent',
        showBackdrop: true,
      });
      loading.present();

      this.angularfireauth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          loading.dismiss();
          this.toast('Please check your email for the reset link!', 'sucess');
          this.router.navigate(['/login']);
          // this.angularfirestore.collection('users').doc(this.email).set({password: this.password})
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        });
    } else {
      this.toast('Please enter your email address!', 'danger');
    }
  }

  async toast(message, status) {
    const toast = await this.toaster.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000,
    });

    toast.present();
  }
}
