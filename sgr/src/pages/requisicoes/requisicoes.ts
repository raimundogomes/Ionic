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
  items: Array<{numRequisicao: string , nomePaciente: string, exames: string, status: string, data: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        numRequisicao: "" + i,
        nomePaciente: 'paciente' + i,
        exames: "Sangue e Urina",
        status: "Solicitado",
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


