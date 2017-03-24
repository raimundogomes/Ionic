import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetalheRequisicao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhe-requisicao',
  templateUrl: 'detalhe-requisicao.html'
})
export class DetalheRequisicaoPage {

  item: any;

   constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheRequisicaoPage');
  }

}
