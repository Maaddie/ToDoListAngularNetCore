import { formatDate } from '@angular/common';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  CreateTask(){
    let tmName: string = (<HTMLInputElement>document.getElementById("TmName")).value;
    console.log(tmName);
    let taskName: string = (<HTMLInputElement>document.getElementById("TaskName")).value;
    console.log(taskName);
    let taskDescription: string = (<HTMLInputElement>document.getElementById("TaskDescription")).value;
    console.log(taskDescription);
    let dueDate: Date = (<HTMLInputElement>document.getElementById("DueDate")).valueAsDate;
    console.log(dueDate);
    let isCompleted: boolean = Boolean.call(<HTMLInputElement>document.getElementById("IsCompleted")).value;
    console.log(isCompleted);

    let newTask: Task = { id: 0, tmName: tmName, taskName: taskName, taskDescription: taskDescription, dueDate: dueDate, isCompleted:isCompleted };
    //We will pass this model to the movie service
    this.taskService.CreateTask(newTask).subscribe(
      (response: any) => { location.reload() }

    );
  }

}
