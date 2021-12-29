import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';

declare var showUser;
declare var showStaff;
declare var showVendor;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  // registerForm: FormGroup;
  name:string;
  email:string;
  password:string;
  staffNum:string;
  vendorNum:string;
  vendorStore:string;
  confirmPassword:string;
  passwordMatch:boolean;
  showPassword = false;
  passwordToggleIcon ="eye";


  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth, 
    private loadingCtrl: LoadingController, 
    private toaster: ToastController,
    ) { 
    // this.registerForm =formbuilder.group({
    //   'Name':'',
    //   'email': '',
    //   'password':''
    // })
  }

  ngOnInit() {
  }

  async registerUser(){

    if(this.name && this.email && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message:'loading..',
        showBackdrop: true
      });
      loading.present();
    
      this.angularFireAuth.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
        this.firestore.collection('users').doc(data.user.uid).set({
          'userId': data.user.uid,
          'name': this.name, 
          'email': this.email, 
          'password': this.password
        });
        data.user.sendEmailVerification();
      })
      .then(()=> {
        loading.dismiss();
        this.router.navigate(['/login'])
        this.toast('Registration sucess!', 'success');
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast('error' +error.message, 'danger')
      })
      } else{
        this.toast('please fill in the form','danger')
      }
    }
      
    async registerStaff(){

      if(this.name && this.email && this.staffNum && this.password)
      {
        const loading = await this.loadingCtrl.create({
          message:'loading..',
          showBackdrop: true
        });
        loading.present();
      
        this.angularFireAuth.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
          this.firestore.collection('SingtelStaff').doc(data.user.uid).set({
            'staffId': data.user.uid,
            'name': this.name, 
            'email': this.email,
            'staffNum': this.staffNum, 
            'password': this.password
          });
          data.user.sendEmailVerification();
        })
        .then(()=> {
          console.log('Registration sucess!');
          loading.dismiss();
          this.router.navigate(['./login'])
        })
        .catch((error)=> {
          loading.dismiss();
          console.log(error.message)
          this.toast('Error'+ error.message, 'Danger');  
        })
        } else{
          console.log("please fill in the form")
        }
      }

      async registerVendor(){

        if(this.name && this.email && this.vendorNum && this.vendorStore && this.password)
        {
          const loading = await this.loadingCtrl.create({
            message:'loading..',
            showBackdrop: true
          });
          loading.present();
        
          this.angularFireAuth.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
            this.firestore.collection('Vendors').doc(data.user.uid).set({
              'vendorId': data.user.uid,
              'name': this.name, 
              'email': this.email,
              'vendorNum': this.vendorNum, 
              'vendorStore': this.vendorStore,
              'password': this.password
            });
            data.user.sendEmailVerification();
          })
          .then(()=> {
            console.log('Registration sucess!');
            loading.dismiss();
            this.router.navigate(['./login'])
          })
          .catch((error)=> {
            loading.dismiss();
            console.log(error.message)
          })
          } else{
            console.log("please fill in the form")
          }
        }
        
    
    checkPassword()
    {
      if(this.password == this.confirmPassword)
      {
        this.passwordMatch = true;
      } else {
        this.passwordMatch = false;
      }
    }

    togglePassword():void{
      this.showPassword = !this.showPassword;
      if(this.passwordToggleIcon =="eye"){
        this.passwordToggleIcon = 'eye-off'
      }else{
        this.passwordToggleIcon='eye'
      }
    }

    async toast(message, status)
    {
      const toast = await this.toaster.create({
        message:message, 
        position: 'top',
        color:status,
        duration:2000
      });

      toast.present();
    }
    
    CallshowUser(){
      showUser();
    }
    CallshowStaff(){
      showStaff();
    }
    CallshowVendor(){
      showVendor();
    }
  
  }
 
