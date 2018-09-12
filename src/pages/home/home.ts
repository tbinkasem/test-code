import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ScanPage } from '../scan/scan';
import { UploadPage } from '../upload/upload';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testNav: any;

  constructor(public app: App,
    public navCtrl: NavController) {

  }

  openProfile(){
    this.navCtrl.push(ProfilePage);
  }

  openScan(){
    this.navCtrl.push(ScanPage);
  }

  openUpload(){
    this.navCtrl.push(UploadPage);
  }

  logout(){
    console.log("page id is: " + this.navCtrl.getActive().id);
    this.testNav = this.app.getRootNavById('n4-1');
    this.navCtrl.setRoot(LoginPage);
  }

}
