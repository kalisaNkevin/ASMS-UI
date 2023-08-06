import { Component, OnInit } from '@angular/core';
import { socialMedia } from 'src/utils/webContent';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMedia: any[] = [];

  ngOnInit() {
    this.socialMedia = socialMedia
  }

}
