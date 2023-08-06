import { Component } from '@angular/core';
import { aboutData } from 'src/utils/webContent';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  aboutData: any[] = [];

  ngOnInit() {
    // Assign the imported aboutData to the component property
    this.aboutData = aboutData;
  }
}
