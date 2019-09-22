import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(private iab: InAppBrowser, private composer: EmailComposer) {
  }
  whatsapp() {
    this.iab.create('http://api.whatsapp.com/send?1=pt_BR&phone=5516997264535', '_system');
  }
  email() {
    this.composer.open({
      to: 'alessandropintura@gmail.com'
  } );
}
  ngOnInit() {
  }

}
