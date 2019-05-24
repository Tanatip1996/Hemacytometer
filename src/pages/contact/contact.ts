import { Component } from '@angular/core';
// import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@Component({
 selector: 'page-contact',
 templateUrl: 'contact.html'
})
export class ContactPage {
    
    myPhoto:any;
    constructor(public NavCtrl:NavController,private camera:Camera) {
   
    }
    takePhoto() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL ,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       this.myPhoto= 'data:image/jpeg;base64,' + imageData;
      
      //  this.myphoto = base64Image;
      }, (err) => {
       // Handle error
      });
    }
    takeGallary(){
      
    }
  }