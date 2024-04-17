import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
  @Input() currentPage:number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Output() changePage = new EventEmitter<number>();

  //pagination UI to navigate
  pages: number[]= [];

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.limit);
    console.log(pagesCount)
    this.pages = this.range(1, pagesCount);
    console.log(this.pages)
  }
  //resuable method to specify the pages available(range) based on the starting index(typically 1) and the amount of pages total from pagesCount ^
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
