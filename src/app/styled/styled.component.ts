import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styled',
  templateUrl: './styled.component.html',
  styleUrls: ['./styled.component.css']
})
export class StyledComponent implements OnInit {

  rows = [];
  linkObj = {};
  ngOnInit() {
    this.generateItems();
  }

  generateItems() {
    for (let i = 1; i <= 10000; i++) {
      const obj = { title: 'title' + i, desc: 'this is sample desc no:' + i, link1: 'link' + i };
      this.rows.push(obj);
    }
  }

}
