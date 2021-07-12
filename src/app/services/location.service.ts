import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  _url= 'http://127.0.0.1:8080/locations'
  
  public contact = { name: '' };

  constructor(
    private http: HttpClient
  ) { 
  
  

  }

  getAllLocotion(){

  	let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/all",{
      headers: header
    });
  }


  DeleteLocation(id:number){

  	let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get(this._url+"/delete"+"/"+id,{
      headers: header
    });
  }


  


  createLocation(form:any){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(this._url+"/save",form,{
      headers: header
    });
  }
}
