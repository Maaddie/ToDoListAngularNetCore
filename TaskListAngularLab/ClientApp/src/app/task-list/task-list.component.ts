import { Component, OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  currentTask?: Task;
  constructor(private TaskDAL: TaskService) { }
  ngOnInit() {  
    this.TaskDAL.GetTaskList().subscribe(
      (response: any) => {
        console.log(response);
        let json = Convert.taskToJson(response); 
        this.currentTask = Convert.toTask(json); 
        console.log(this.currentTask); 
      }
    );
  }
}
