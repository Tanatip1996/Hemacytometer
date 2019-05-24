import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';


import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  // ...omitted
  rootPage:any = TabsPage;
  // showSplash = true; // <-- show animation
  // platform: any;
  // statusBar: any;
  // splashScreen: any;

  // initializeApp() {
  //     this.platform.ready().then(() => {

  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();  // <-- hide static image

  //     timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
  //   });
  // }
}
