import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  //post data
  list!: Post[];

  //pagination properties
  currentPage: number = 1;
  totalPosts: number = 100

  changePage(page: number): void {
    this.currentPage = page;
    this.list = [];
    this.dataService.getDatas(this.currentPage, 10)
      .subscribe(
        (datas) => {
          setTimeout(() => {
            this.list = datas;
          }, (400));
        }
      )
  }
  
  constructor(
    private dataService: DataService,
    private http: HttpClient,
  ){ }

  //initialize the list array with the post array from dataService
  ngOnInit(): void {
    //get paged data
    this.dataService.getDatas(this.currentPage, 10)
      .subscribe(
        (datas) => {
          this.list = datas;
        }
      )
    
  }

}
