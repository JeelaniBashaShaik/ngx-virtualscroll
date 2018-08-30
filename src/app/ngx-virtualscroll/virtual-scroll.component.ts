import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-virtualscroll',
  templateUrl: './virtual-scroll.component.html',
  styles: []
})
export class VirtualScrollComponent implements OnInit {

  constructor() {}

  @Input() templateId: TemplateRef<any>;
  @Input() rows;
  @Input() itemHeight;
  @Input() height;
  @Input() width;
  @Input() styled = true;

  invisibleHeight: number;
  countOfItemsInViewPort: number;
  viewPortItemEndIndex: number;
  viewPortItemStartIndex = 0;
  lastScrolledTop = 0;
  viewPortItems = [];
  countOfItemsScrolled = 0;

  ngOnInit() {
    this.calculateOpaqueDivHeight();
    this.countOfItemsInViewPort = Math.floor(this.height / this.itemHeight);
    this.calculate();
    this.viewPortItemEndIndex = this.countOfItemsInViewPort;
  }

  calculateOpaqueDivHeight() {
    if (this.rows.length > 0) {
      this.invisibleHeight = this.rows.length * this.itemHeight;
    }
  }

  calculate() {
    this.rows.map((row, index) => {
      row['top'] = (index * this.itemHeight);
    });
    this.viewPortItems = this.rows.filter((row, index) => {
      if (index >= 0 && index <= this.countOfItemsInViewPort + 1) {
        return row;
      }
    });
  }

  viewScrolled(scrolledHeight) {
    const countOfItemsScrolled = Math.ceil(scrolledHeight / this.itemHeight);
    this.viewPortItemStartIndex = countOfItemsScrolled;
    this.viewPortItemEndIndex = this.viewPortItemStartIndex + this.countOfItemsInViewPort;
    if (this.lastScrolledTop !== this.viewPortItemStartIndex) {
      const itemsToReturn = this.rows.filter((row, index) => {
        if ((index >= this.viewPortItemStartIndex - 1) && (index <= this.viewPortItemEndIndex)) {
          return row;
        }
      });
      this.viewPortItems = [...itemsToReturn];
    }
    this.lastScrolledTop = this.viewPortItemStartIndex;
  }
}
