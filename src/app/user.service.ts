import { Injectable, ɵExtraLocaleDataIndex } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChildActivationStart, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { switchMap } from 'rxjs/operators';
import { actionSheetController } from '@ionic/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { getAuth, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { ElementFinder } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<any>;
  user: User;
  email: string;
  password: string;
  res: any;
  name: string;
  Uid: string;

  constructor(
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toaster: ToastController,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore.doc('users/$(user.uid)').valueChanges();
        } else {
          return of(null);
        }
      })
    );
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

  // add(Email, Name, Password) {
  //   return this.firestore.collection('users').add({  email: Email, name: Name, password: Password});
  //   }
  update(uid, Email, Name) {
    return this.firestore
      .collection('users')
      .doc(uid)
      .set({ uid: uid, name: Name, email: Email });
  }
  // delete(id) {
  //   return this.firestore.collection('users').doc(id).delete();
  //   }
  getOne(id) {
    return this.firestore.collection('users').doc(id).valueChanges();
  }

  // async login(email, password) {
  //   const loading = await this.loadingCtrl.create({
  //     message: "Authenticating...",
  //     spinner: "crescent",
  //     showBackdrop: true
  //   });
  //   loading.present();

  //   this.angularFireAuth.signInWithEmailAndPassword(email, password).then((data) => {
  //     if (!data.user.emailVerified) {
  //       loading.dismiss();
  //       this.toast('Please verify your email', 'danger');
  //       this.logout();
  //     } else {
  //       loading.dismiss();
  //       this.router.navigate(['/home'])
  //       this.toast('welcome', 'success')
  //     }
  //   })
  // }

  async login(email, password) {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating...',
      spinner: 'crescent',
      showBackdrop: true,
    });
    loading.present();

    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        loading.dismiss();
        if (!data.user.emailVerified) {
          loading.dismiss();
          this.toast('please verify your email', 'danger');
          this.logout();
        } else {
          loading.dismiss();
          this.router.navigate(['/home']);
        }
      })
      .catch((error) => {
        loading.dismiss();
        this.toast('error' + error.message, 'danger');
      });
  }

  //   async loginStaff(email, password, staffNum)
  // {
  //   const loading = await this.loadingCtrl.create({
  //     message: "Authenticating...",
  //     spinner: "crescent",
  //     showBackdrop: true
  //   });
  //   loading.present();

  //    this.angularFireAuth.signInWithEmailAndPassword(email, password).then((data) => {
  //     var user = this.angularFireAuth.authState
  //     console.log(user)
  //     loading.dismiss();
  //     if(!data.user.emailVerified){
  //       loading.dismiss();
  //       this.toast('please verify your email','danger')
  //       this.logout()
  //     }
  //     else if (){
  //       loading.dismiss();
  //       this.router.navigate(['/home'])
  //     }
  //   })
  //   .catch((error) => {
  //       loading.dismiss();
  //       this.toast('error' + error.message, 'danger');
  //     });

  // }

  async loginStaff(email, password, staffNum) {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating...',
      spinner: 'crescent',
      showBackdrop: true,
    });
    loading.present();

    let i = 0;
    //get all user (login loop)
    this.firestore
      .collection('SingtelStaff')
      .snapshotChanges()
      .forEach((user) => {
        let booleanValue: string;
        // for all staff, if what user type = data, set true/false
        user.forEach((userObject) => {
          // console.log(userObject.payload.doc.data()["email"])
          // console.log(email, password, staffNum)
          if (
            email === userObject.payload.doc.data()['email'] &&
            password === userObject.payload.doc.data()['password'] &&
            staffNum === userObject.payload.doc.data()['staffNum']
          ) {
            booleanValue = 'true';
            //check, if true, login i==0, stop login loop
            if (booleanValue === 'true' && i === 0) {
              this.angularFireAuth
                .signInWithEmailAndPassword(email, password)
                .then((data) => {
                  loading.dismiss();
                  if (!data.user.emailVerified) {
                    loading.dismiss();
                    i = i + 1;
                    this.logout();

                    this.toast('please verify your email', 'danger');
                  } else {
                    loading.dismiss();
                    var user = this.angularFireAuth.authState;
                    i = i + 1;
                    this.router.navigate(['/homestaff']);
                    this.toast('welcome' + email, 'success');
                    //console.log(user)
                  }
                });
              // .catch(function(error) {
              //   loading.dismiss();
              //   this.toast('error' + error.message, 'danger')
              //   console.log(error.message)
              //});
              // var user = this.angularFireAuth.authState
              //
              // this.router.navigate(['/homestaff'])
              // this.toast('welcome' + email, 'success')
            }
          } else if (
            email === userObject.payload.doc.data()['email'] &&
            i === 0
          ) {
            if (
              password !== userObject.payload.doc.data()['password'] ||
              staffNum !== userObject.payload.doc.data()['staffNum']
            ) {
              i = i + 1;
              loading.dismiss();
              this.toast('please check your login credentials', 'danger');
            }
          }
          //console.log(userObject.payload.doc.data()["email"])
          loading.dismiss();
        });
      });
  }

  async loginVendor(email, password, vendorNum) {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating...',
      spinner: 'crescent',
      showBackdrop: true,
    });
    loading.present();

    // let i = 0
    // //get all user (login loop)
    // this.firestore.collection('Vendors').snapshotChanges().forEach(user => {
    //   let booleanValue: string
    //   // for all staff, if what user type = data, set true/false
    //   user.forEach(userObject => {
    //     if (email === userObject.payload.doc.data()["email"] && password === userObject.payload.doc.data()["password"] && vendorNum === userObject.payload.doc.data()["vendorNum"]) {
    //       booleanValue = "true"
    //       //check, if true, login i==0, stop login loop
    //       if (booleanValue === "true" && i === 0) {
    //         this.angularFireAuth.signInWithEmailAndPassword(email, password).then((data) => {
    //           var user = this.angularFireAuth.authState
    //           console.log(user)
    //         })
    //         i = i + 1
    //         this.router.navigate(['/homevendor'])
    //         //this.toast('welcome' + email, 'success')
    //       }
    //     }
    //   })
    // })

    let i = 0;
    //get all user (login loop)
    this.firestore
      .collection('Vendors')
      .snapshotChanges()
      .forEach((user) => {
        let booleanValue: string;
        // for all staff, if what user type = data, set true/false
        user.forEach((userObject) => {
          // console.log(userObject.payload.doc.data()["email"])
          // console.log(email, password, staffNum)
          if (
            email === userObject.payload.doc.data()['email'] &&
            password === userObject.payload.doc.data()['password'] &&
            vendorNum === userObject.payload.doc.data()['vendorNum']
          ) {
            booleanValue = 'true';
            //check, if true, login i==0, stop login loop
            if (booleanValue === 'true' && i === 0) {
              this.angularFireAuth
                .signInWithEmailAndPassword(email, password)
                .then((data) => {
                  loading.dismiss();
                  if (!data.user.emailVerified) {
                    loading.dismiss();
                    i = i + 1;
                    this.logout();
                    this.toast('please verify your email', 'danger');
                  } else {
                    loading.dismiss();
                    var user = this.angularFireAuth.authState;
                    i = i + 1;
                    this.router.navigate(['/homevendor']);
                    this.toast('welcome' + email, 'success');
                    //console.log(user)
                  }
                });
              // .catch(function(error) {
              //   loading.dismiss();
              //   this.toast('error' + error.message, 'danger')
              //   console.log(error.message)
              //});
              // var user = this.angularFireAuth.authState
              //
              // this.router.navigate(['/homestaff'])
              // this.toast('welcome' + email, 'success')
            }
          } else if (
            email === userObject.payload.doc.data()['email'] &&
            i === 0
          ) {
            if (
              password !== userObject.payload.doc.data()['password'] ||
              vendorNum !== userObject.payload.doc.data()['vendorNum']
            ) {
              i = i + 1;
              loading.dismiss();
              this.toast('please check your login credentials', 'danger');
            }
          }
          //console.log(userObject.payload.doc.data()["email"])
          loading.dismiss();
        });
      });
  }

  // verifyStaff(email, password, staffNum) {
  //   let booleanValue: string
  //   this.firestore.collection('SingtelStaff').snapshotChanges().forEach(user => {
  //     user.forEach(userObject => {
  //       if (email === userObject.payload.doc.data()["email"] && password === userObject.payload.doc.data()["password"] && staffNum === userObject.payload.doc.data()["staffNum"]) {
  //         booleanValue = "true"
  //       }
  //       else {
  //         booleanValue = "false"
  //       }
  //     })
  //     booleanValue = booleanValue
  //     return booleanValue
  //   })
  // }

  // async loginVendor(email, password, vendorNum) {
  //   const loading = await this.loadingCtrl.create({
  //     message: "Authenticating...",
  //     spinner: "crescent",
  //     showBackdrop: true
  //   });
  //   loading.present();

  //   this.firestore.collection('Vendors').doc.arguments(email, password, vendorNum).then((data) => {
  //     if (!data.user.emailVerified) {
  //       loading.dismiss();
  //       this.toast('Please verify your email', 'danger');
  //       this.logout();
  //     } else {
  //       if (email = this.res.email && password == this.res.password && vendorNum == this.res.vendorNum) {
  //         loading.dismiss();
  //         this.router.navigate(['/homestaff'])
  //         this.toast('welcome' + email, 'success')
  //       }
  //     }
  //   })
  // }

  async registerUser() {
    if (this.name && this.email && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'loading..',
        showBackdrop: true,
      });
      loading.present();

      this.angularFireAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.firestore.collection('users').doc(data.user.uid).set({
            userId: data.user.uid,
            name: this.name,
            email: this.email,
            password: this.password,
          });
          data.user.sendEmailVerification();
        })
        .then(() => {
          loading.dismiss();

          this.router.navigate(['/login']);
          this.toast('Registration sucess!', 'Success');
        })
        .catch((error) => {
          loading.dismiss();
          this.toast('error' + error.message, 'danger');
        });
    } else {
      this.toast('please fill in the form', 'danger');
    }
  }

  delete(uid: string): Promise<void> {
    //return this.firestore.doc('users/${id}').delete();

    return this.firestore
      .collection('users')
      .doc(uid)
      .delete()
      .then(() => {
        this.toast('account deleted!', 'success');
        this.router.navigate['/login'];
      });
  }
  deleteStaff(uid: string): Promise<void> {
    //return this.firestore.doc('users/${id}').delete();

    return this.firestore
      .collection('SingtelStaff')
      .doc(uid)
      .delete()
      .then(() => {
        this.toast('account deleted!', 'success');
        this.router.navigate['/login'];
      });
  }

  deleteVendor(uid: string): Promise<void> {
    return this.firestore
      .collection('Vendors')
      .doc(uid)
      .delete()
      .then(() => {
        this.toast('account deleted!', 'success');
        this.router.navigate['/login'];
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

  async logout() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  userDetails() {
    return this.angularFireAuth.user;
  }

  // getUid(){
  //   const ref = this.firestore.collection('users').snapshotChanges().forEach(user=>{
  //     return user.map(a=>{
  //       //const userdata=a.doc.data()
  //       const id=a.payload.doc.id
  //       if ()
  //     })
  //   })
  // }
}
