import { Component, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { UserService } from '../user.service';
import { getAuth, onAuthStateChanged, deleteUser, updateCurrentUser } from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import  firebase from 'firebase/compat';
import { User } from '../models/user';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})

export class AccountPage {
  useremail: string;
  username: string;
  userpassword:any;
  Uid: any;
  name:string;
  email:string;
  user:User
  newEmail:string;
  auth: any;
  userArray:any;
  
  
  
  

  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    private toaster: ToastController,
    private firestore: AngularFirestore, 
    private loadingCtrl: LoadingController) {

  }

  ngOnInit() {

    
  
     this.userService.user$.subscribe(user =>{
    //   this.Uid = user.uid;
    //  this.username = user.name;
    //  console.log(this.username)
    //   this.useremail = user.email;
     })
    const auth = getAuth()
    
    onAuthStateChanged(auth, (user) => {
      //let userdata: any
      if (user) {
        this.Uid = user.uid
        // const useremail = user.email
        console.log(user)
        this.firestore.collection('users').doc(this.Uid).snapshotChanges().forEach(user=>{
  
          this.username = user.payload.data()["name"]
          this.useremail = user.payload.data()["email"]
          console.log(user.payload.data()['name'])
          // userdata = user.payload.data.toString()
          // user.payload.data.toString()
          //this.toast('welcome ' + this.useremail, 'success')
          }

          
        ) 
        //console.log(userdata)
        
        //const username = user.name

        //const username = this.getUsername()
        //const username = user.name
        
        //console.log(this.Uid, useremail)
        
        
        
      }
    
    })
    this.userService.userDetails().subscribe(res => {
      if (res !== null) {
        this.useremail = res.email;
        
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {

    })

    
  }

  // getUsername(){
  //   this.userService.getOne(this.Uid, this.name, this.email).subscribe(res =>{
  //     if(res != null){
  //       console.log(res)
  //        const username = this.name
  //        console.log(username)
  //     }else{
  //       console.log('error.message')
  //     }
      
  //   })
    
  //   }
  

  logout() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/login'])
    })
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

  
  async delete(): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: 'Are your sure you want to delete this account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: yes => {
            console.log('Confirm Cancel: yes');
          },
        },
        {
          text: 'Delete',
          handler: async () => {
            (await this.angularFireAuth.currentUser).delete()
            this.userService.delete(this.Uid)
          },
        },
      ],
    });
    await alert.present()
  }
  

  //  update(){
  //    this.userService.update(this.Uid, this.name, this.email).then(() => {
  //      this.router.navigate(['/login'])
  //    })
     
  //  }

   async update(){
     const loading = await this.loadingCtrl.create({
       message: "updating...",
       spinner: "crescent",
       showBackdrop: true
     });

     loading.present();

     (await this.angularFireAuth.currentUser).updateEmail(this.useremail).then(async ()=>{
      (await this.angularFireAuth.currentUser).sendEmailVerification();
      console.log("auth updated")
      
     })
     this.firestore.collection('users').doc(this.Uid).set({
       'name': this.username, 
       'email':this.useremail, 
     }, {merge:true})
     .then(()=>{
         loading.dismiss();
       this.toast('update sucess', 'success')
       
       
       this.router.navigate['/login']
     })
   }

   
//   async update(id,email,name): Promise<void> {
//      const alert = await this.alertCtrl.create({
//        message: 'Are your sure you want to update this account?',
//        buttons: [
//          {
//            text: 'Cancel',
//           role: 'cancel',
//            handler: yes => {
//              console.log('Confirm Cancel:', yes);
//            },
//          },
//          {
//            text: 'Update',
//            handler: async () => {
            
//              (await this.firestore.collection('users').doc.)  
//              (await this.angularFireAuth).updateCurrentUser(email)
            
//            },
//          },
//        ],
//      });
//    await alert.present()
//     }
 }
