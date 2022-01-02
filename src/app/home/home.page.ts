import { Component, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { UserService } from '../user.service';
import {
  getAuth,
  onAuthStateChanged,
  deleteUser,
  updateCurrentUser,
} from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  Uid: any;
  user: any;

  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private toaster: ToastController
  ) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.Uid = user.uid;
        const useremail = user.email;
        console.log(this.Uid, useremail);
        this.toast('welcome ' + useremail, 'success');
      }
    });
    this.userService.userDetails().subscribe(
      (res) => {
        if (res !== null) {
          this.email = res.email;
        } else {
          this.navCtrl.navigateBack('');
        }
      },
      (err) => {}
    );
  }

  logout() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
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

  async delete(): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: 'Are your sure you want to delete this account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (yes) => {
            console.log('Confirm Cancel: yes');
          },
        },
        {
          text: 'Delete',
          handler: async () => {
            (await this.angularFireAuth.currentUser).delete();
            this.userService.delete(this.Uid);
          },
        },
      ],
    });
    await alert.present();
  }
}
