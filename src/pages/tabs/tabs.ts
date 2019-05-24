import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MediaPage } from '../media/media';
import { CamprePage } from "../campre/campre";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MediaPage;
  tab3Root = CamprePage;

  constructor() {

  }
}
