import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageRequested = 1;


  onPageChange(page:number){
    this.pageRequested = page;
    console.log(this.pageRequested)
  }

}
