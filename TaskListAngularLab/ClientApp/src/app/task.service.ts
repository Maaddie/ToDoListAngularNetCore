import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './Task';

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

CreateTask(t: Task) {

  console.log(t);
  return this.http.post(this.url + "/insertNewTask/", t);
}

DeleteTask(id:number){
  return this.http.delete(this.url + "/deleteTask/" + id);
}

UpdateTask(newTask:Task, id:number){
  return this.http.put(this.url + "/updateTask/" + id, newTask);
}

}

