import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements OnInit {
  pages:number[];
  constructor() { }
  @Input ()numberOfPages;
  @Output() pageNumberClick = new EventEmitter<number>() ;

  pageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber);
  }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);
  }

}
