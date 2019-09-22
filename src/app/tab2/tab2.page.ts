import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
  constructor(private modalController: ModalController) { }
  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }
}
