import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: any
  searchTitle: any
  searchId: any;
  result1: any
  HideShow: boolean = true
  getDetails:any;
  getData:any;
  specificId:any;
  HideShow1:boolean= false
 dataA:any=[];
 specificData:any;
 showlis:boolean=false

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getMoviesList();

    this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=5892e603").subscribe(resp => {
      this.result1 = resp
      console.log(this.result)
    })
  }
  searchByName() {
    if (this.searchTitle != null || this.searchTitle != undefined) {
      this.http.get("http://www.omdbapi.com/?apikey=5892e603&t=" + this.searchTitle).subscribe(resp => {
        this.result = resp
        console.log(this.result)
        this.HideShow = false;
      })
    }
    if (this.searchId != null || this.searchId != undefined) {
      this.http.get("http://www.omdbapi.com/?apikey=5892e603&i=" + this.searchId).subscribe(resp => {
        this.result = resp
        console.log(this.result)
        this.HideShow = false;
      })
    }
  }
  getMoviesList(){
    this.http.get("http://www.omdbapi.com/?s=inception&apikey=5892e603").subscribe(resp=>{
      this.getDetails=resp
      this.getData=this.getDetails['Search']
      console.log(this.getDetails['Search'])
    })
  }
  showDetails(event:any){
    
console.log(event)
this.specificData= event
this.specificId=event?.Title
 console.log(this.specificId);
 this.dataA.push(this.specificId)
 console.log(this.dataA);
 

  }
  showList(){
    this.showlis= true

  }

}
