import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  url: string ="Task";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl+ this.url;
}

GetTaskList(){
  return this.http.get(this.url);
}

GetTask(id : number) : Observable<Object> {
  return this.http.get(this.url + "/get/" + id);
}
}

