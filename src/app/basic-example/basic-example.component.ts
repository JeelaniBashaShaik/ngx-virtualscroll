import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.css']
})
export class BasicExampleComponent implements OnInit {

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
