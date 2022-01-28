import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
  providers: [TaskService]
})
export class UpdateTaskComponent implements OnInit {
  @Input() Id: number;
  task: Task;
  constructor(private taskService:TaskService) { }
  ngOnInit() {
    this.taskService.GetTask(this.Id).subscribe(
      (response:any) => {
        console.log(response);
        this.task = response;
      }
    );
  }
  UpdateTask(){
    let tmName: string = (<HTMLInputElement>document.getElementById("TmName" + this.Id)).value;
    console.log(tmName);
    let taskName: string = (<HTMLInputElement>document.getElementById("TaskName" + this.Id)).value;
    console.log(taskName);
    let taskDescription: string = (<HTMLInputElement>document.getElementById("TaskDescription" + this.Id)).value;
    console.log(taskDescription);
    let dueDate: Date = (<HTMLInputElement>document.getElementById("DueDate" + this.Id)).valueAsDate;
    console.log(dueDate);
    let isCompleted: boolean = Boolean.call(<HTMLInputElement>document.getElementById("IsCompleted" +this.Id)).value;
    console.log(isCompleted);

    let newTask: Task = { id: this.Id, tmName: tmName, taskName: taskName, taskDescription: taskDescription, dueDate: dueDate, isCompleted:isCompleted };

    this.taskService.UpdateTask(newTask, this.Id).subscribe(
      (response:any) => {location.reload()}
    )
  }

}
