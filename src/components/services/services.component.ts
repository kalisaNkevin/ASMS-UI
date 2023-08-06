import { Component } from '@angular/core';
import { serviceData } from 'src/utils/webContent';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
serviceData: any[] = [];

ngOnInit(){
  this.serviceData = serviceData
}

}
