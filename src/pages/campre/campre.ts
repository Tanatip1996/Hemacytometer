import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreview } from "@ionic-native/camera-preview";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




/**
 * Generated class for the CamprePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-campre',
  templateUrl: 'campre.html',
})
export class CamprePage {

  picture: string;

  cameraOpts: CameraPreviewOptions = {
    x: 37,
    y: 74,
    width: 300,
    height:300,
    camera:this.cameraPreview.CAMERA_DIRECTION.BACK,
    toBack: false,
    
  };

  cameraPictureOpts: CameraPreviewPictureOptions = {
    width: window.innerWidth,
    height: window.innerHeight,
    quality: 100
  };

  constructor(private cameraPreview: CameraPreview,public http:HttpClient) {}

  ionViewDidLoad() {
    this.startCamera();
  }

  async startCamera() {
    this.picture = null;
    const result = await this.cameraPreview.startCamera(this.cameraOpts);
    console.log(result);
  }

  // switchCamera() {
  //   this.cameraPreview.switchCamera();
  // }

  async takePicture() {
    const result = await this.cameraPreview.takePicture(this.cameraPictureOpts);
    await this.cameraPreview.stopCamera();
    this.picture = `data:image/jpeg;base64,${result}`;
  
  }

  savePicture(){
    let url="http://mikayil.com/json.php";
    let postData = new FormData();
    postData.append('file',this.picture);
    let data:Observable<any> = this.http.post(url,postData);
    data.subscribe((result) =>{
      console.log(result);
    })

  }
 

}
