import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Requisicoes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-requisicoes',
  templateUrl: 'requisicoes.html'
})
export class RequisicoesPage {

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisicoesPage');
  }

    selectedItem: any;
  icons: string[];
  items: Array<{numero: string, paciente: string, icon: string, data: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        numero: 'N° ' + i,
        paciente: 'paciente' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length  )],
        data: '18/12/2017'
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RequisicoesPage, {
      item: item
    });
  }
}


