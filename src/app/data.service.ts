import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //totalData
  totalData!: number

  //define the api url
  url = 'https://jsonplaceholder.typicode.com/posts';


  //inject http to be available to use
  constructor(private http: HttpClient) { 
  }



  //get all posts data
  getDatas(page: number, limit: number): Observable<Post[]> {
    //get total data
    // this.http.get<Post[]>(this.url)
    //   .subscribe(
    //     (datas) => {
    //       this.totalData = datas.length 
    //     // console.log(this.totalData)
    //     }
    //   )

    const apiUrl = `${this.url}?_page=${page}&_limit=${limit}`;
    return this.http.get<Post[]>(apiUrl);

  }



}
