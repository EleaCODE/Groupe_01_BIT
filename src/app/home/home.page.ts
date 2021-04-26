import { Component } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController){
  }

  async showLaoding() {
   let loading = await this.loadingCtrl.create({
     message: "Please Wait...",
     duration: 2000,
     showBackdrop:false,
     spinner: "lines"
   });


      loading.present();

      setTimeout(() =>{
        loading.dismiss();
      }, 2000)
    }

}





