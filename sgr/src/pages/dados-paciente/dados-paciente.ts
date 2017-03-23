import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DadosPaciente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dados-paciente',
  templateUrl: 'dados-paciente.html'
})
export class DadosPacientePage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
    console.log('DadosPacientePage construtor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosPacientePage');
  }

}
