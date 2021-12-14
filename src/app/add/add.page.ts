import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public car: any;
  constructor(public modalController: ModalController) { 
    this.car = {
      make: null,
      model: null,
      color: null,
      price: null,
      image: null
    };
  }

  async close(){
    return await this.modalController.dismiss();
  }

  ngOnInit() {
  }

  async addCar(){
    // console.log(this.car);
    return await this.modalController.dismiss(this.car);
  }

}
