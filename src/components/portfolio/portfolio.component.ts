import { Component, OnInit } from '@angular/core';
import { portfolioData } from 'src/utils/webContent';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioData: any[] = [];

  ngOnInit() {
    this.portfolioData = portfolioData;
  }
}

