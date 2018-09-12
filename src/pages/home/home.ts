import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ScanPage } from '../scan/scan';
import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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

}
