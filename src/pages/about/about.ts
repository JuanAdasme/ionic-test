import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  list : Array<any> = [
    {
      titulo: "título",
      color: "#444"
    },
    {
      titulo: "Segundo elemento",
      color: "#999"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
