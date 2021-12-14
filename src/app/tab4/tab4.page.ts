/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AddPage } from '../add/add.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public carList: Array<any>;
  constructor(public modalController: ModalController, private storage: Storage) { 
    this.carList = [
      { 
        make: 'Proton',
        model: 'X70',
        price: 130000,
        color: 'white',
        image: 'https://paultan.org/image/2020/02/2020-Proton-X70-CKD-1.8L-TGDi_-Snow-White-1-1.jpg'
      },
      { 
        make: 'Perodua',
        model: 'Myvi',
        price: 50000,
        color: 'black',
        image: 'https://imgcdn.zigwheels.my/medium/gallery/color/18/1340/perodua-myvi-color-507884.jpg'
      },
      { 
        make: 'Mitsubishi',
        model: 'Lancer',
        price: 140000,
        color: 'red',
        image: 'https://cdn.shopify.com/s/files/1/2452/9929/products/2297-1_800x.jpg'
      }
    ];
  }

  async pageAdd(){
    const modal = await this.modalController.create({
      component: AddPage,
    });
    
    await modal.present();
    const { data } = await modal.onWillDismiss();
    // console.log('car data=> ', data);
    if(data){
      // add to carList
      this.carList.unshift(data);
      this.saveData();
    }
  }

  delete(carIndex: any){
    console.log(carIndex);
    this.carList.splice(carIndex, 1);
    this.saveData();
  }

  async ngOnInit() {
    // console.log(this.carList);
    await this.storage.create();
    const response: any = await this.getData();
    console.log(response);
    this.carList = response;
  }

  async saveData(){
    await this.storage.set('CARLIST', this.carList);
  }

  async getData(){
    const carData = await this.storage.get('CARLIST');
    return carData;
  }


}
