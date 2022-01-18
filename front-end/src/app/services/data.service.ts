import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  REST_API:String='http://localhost:8080/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

 products:any; 
 constructor(private httpClient: HttpClient) { 
  // this.httpClient.get("assets/data.json").subscribe(data =>{
  //   console.log(data);
  //   this.products = data;
  // }) 
  //dummy data
      
 }
  // getData() { 
  //   return this.products;
  // }

  getAllProducts():Observable<any> {
    return this.httpClient.get(`${this.REST_API}`);
  }

  getProduct(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/product-detail/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  AddBook(data: any): Observable<any> {
    let API_URL = `${this.REST_API}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }


   // Error 
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);}




}
