import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public firstPartialText;
  public secondPartialText;

  constructor(public http: HttpClient){}

  getFirstParialText(){
      let path:string='/mock/mockData.json';
      let headers = new HttpHeaders().set('Range', 'bytes=0-123').set('Access-Control-Allow-Origin','*');
      this.http.get(path,{headers:headers}).subscribe((data:any)=>{
        this.firstPartialText=data;
      });
    }

    getSecondParialText(){
      let path:string='/mock/mockData.json';
      let headers = new HttpHeaders().set('Range', 'bytes=1-123').set('Access-Control-Allow-Origin','*');
      this.http.get(path,{headers:headers}).subscribe((data:any)=>{
        this.secondPartialText=data;
      });
    }
  

}




