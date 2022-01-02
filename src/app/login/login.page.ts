import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from '../user.service';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

declare var showUserLogin;
declare var showStaffLogin;
declare var showVendorLogin;

interface userObject {
  id: any;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Uid: any;
  name: string;
  email: string;
  password: string;
  userarray: [any];
  staffNum: any;
  vendorNum: any;
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    private loadingCtrl: LoadingController,
    private toaster: ToastController,
    private angularFireAuth: AngularFireAuth,
    private user: UserService,
    private firestore: AngularFirestore
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
  }

  async loginUser() {
    if (this.email && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'logging in...',
        spinner: 'crescent',
        showBackdrop: true,
      });

      loading.present();

      this.user
        .login(this.email, this.password)
        .then(() => {
          loading.dismiss();

          //get all user
          const ref = this.firestore
            .collection('users')
            .snapshotChanges()
            .forEach((user) => {
              return user.map((a) => {
                const userdata = a.payload.doc.data();
                const id = a.payload.doc.id;
              });
            });
        })

        .catch((error) => {
          loading.dismiss();
          this.toast('error' + error.message, 'danger');
        });
    } else {
      this.toast('Please fill in the form!', 'danger');
    }
  }

  async loginStaff() {
    if (this.email && this.password && this.staffNum) {
      // const loading = await this.loadingCtrl.create({
      //   message: "logging in...",
      //   spinner: "crescent",
      //   showBackdrop: true
      // });

      // loading.present();

      //console.log(this.staffNum)
      this.user
        .loginStaff(this.email, this.password, this.staffNum)
        .then(() => {
          // loading.dismiss();
          // //get all user
          // const ref = this.firestore.collection('SingtelStaff').snapshotChanges().forEach(user=>{
          //        return user.map(a=>{
          //         const userdata =a.payload.doc.data()
          //         const id=a.payload.doc.id
          //          })
          //        }
          //      )
        })

        .catch((error) => {
          // loading.dismiss();

          // this.toast('error'+ error.message,'danger');
          console.log(error.message);
        });
    } else {
      this.toast('Please fill in the form', 'danger');
    }
  }

  async loginVendor() {
    if (this.email && this.password && this.vendorNum) {
      // const loading = await this.loadingCtrl.create({
      //   message: "logging in...",
      //   spinner: "crescent",
      //   showBackdrop: true
      // });

      // loading.present();

      this.user
        .loginVendor(this.email, this.password, this.vendorNum)
        .then(() => {
          //loading.dismiss();
          //get all user
          //   const ref = this.firestore.collection('Vendors').snapshotChanges().forEach(user=>{
          //          return user.map(a=>{
          //           const userdata =a.payload.doc.data()
          //           const id=a.payload.doc.id
          //            })
          //          }
          //        )
        })

        .catch((error) => {
          // loading.dismiss();
          // this.toast('error'+ error.message,'danger');
          console.log(error.message);
        });
    } else {
      this.toast('Please fill in the form!', 'danger');
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  // loginStaff(){
  //   if(this.email && this.password && this.staffNum){
  //     const loading = await this.loadingCtrl.create({
  //       message: "logging in...",
  //       spinner: "crescent",
  //       showBackdrop: true
  //     });

  //     loading.present();

  //   this.user.loginStaff(this.email, this.password, this.staffNum).then(()=>{
  //     loading.dismiss();
  //   })
  //   .catch ((error)=> {
  //     loading.dismiss();
  //     this.toast(error.message,'danger');
  //   });
  //   else{
  //     this.toast('Please enter your email and password!', 'danger')
  //   }
  // }

  async toast(message, status) {
    const toast = await this.toaster.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000,
    });

    toast.present();
  }

  CallshowUserLogin() {
    showUserLogin();
  }
  CallshowStaffLogin() {
    showStaffLogin();
  }
  CallshowVendorLogin() {
    showVendorLogin();
  }
}
