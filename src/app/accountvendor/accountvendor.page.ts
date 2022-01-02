import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {
  NavController,
  AlertController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accountvendor',
  templateUrl: './accountvendor.page.html',
  styleUrls: ['./accountvendor.page.scss'],
})
export class AccountvendorPage implements OnInit {
  Uid: any;
  username: string;
  useremail: string;
  vendorNum: string;
  vendorStore: string;

  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private toaster: ToastController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.Uid = user.uid;
        //const useremail = user.email
        //console.log(this.Uid, useremail)
        this.firestore
          .collection('Vendors')
          .doc(this.Uid)
          .snapshotChanges()
          .forEach((user) => {
            this.username = user.payload.data()['name'];
            this.useremail = user.payload.data()['email'];
            this.vendorStore = user.payload.data()['vendorStore'];
            this.vendorNum = user.payload.data()['vendorNum'];
            console.log(user.payload.data()['name']);
            // userdata = user.payload.data.toString()
            // user.payload.data.toString()
          });
      }
    });
    this.userService.userDetails().subscribe(
      (res) => {
        if (res !== null) {
          this.useremail = res.email;
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

  async update() {
    const loading = await this.loadingCtrl.create({
      message: 'updating...',
      spinner: 'crescent',
      showBackdrop: true,
    });

    loading.present();

    (await this.angularFireAuth.currentUser)
      .updateEmail(this.useremail)
      .then(async () => {
        (await this.angularFireAuth.currentUser).sendEmailVerification();
        console.log('auth updated');
      });
    this.firestore
      .collection('Vendors')
      .doc(this.Uid)
      .set(
        {
          name: this.username,
          email: this.useremail,
          vendorNum: this.vendorNum,
        },
        { merge: true }
      )
      .then(() => {
        loading.dismiss();
        this.toast('update sucess', 'success');

        this.router.navigate['/login'];
      });
  }

  async delete(): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: 'Are your sure you want to delete this account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (yes) => {
            console.log('Confirm Cancel:', yes);
          },
        },
        {
          text: 'Delete',
          handler: async () => {
            (await this.angularFireAuth.currentUser).delete();
            this.userService.deleteVendor(this.Uid);
          },
        },
      ],
    });
    await alert.present();
  }
}
