import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  data = { };
  options: BarcodeScannerOptions;

  constructor(public bcScanner: BarcodeScanner,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  scan(){
    this.data = { };
    this.options = {
        preferFrontCamera: false,
        showFlipCameraButton: true,
        prompt: "กรุณาสแกนโค๊ดที่ต้องการ"
    }
    this.bcScanner.scan(this.options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
    
  }

}
