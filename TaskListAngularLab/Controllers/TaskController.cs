using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskListAngularLab.Models;

namespace TaskListAngularLab.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class TaskController
    {
        TaskDAL taskDAL = new TaskDAL();

        [HttpGet]
        public List<Task> GetTasks()
        {
            return taskDAL.GetTasks();
        }

        [HttpGet("get/{id}")]
        public Task GetTask(int id)
        {
            return taskDAL.GetTask(id);
        }

        [HttpPost("insertNewTask")]
        public void InsertMovie(Task t)
        {
            taskDAL.InsertTask(t);
        }

        [HttpDelete("deleteTask/{id}")]
        public void DeleteTask(int id)
        {
            taskDAL.DeleteTask(id);
        }

        [HttpPut("updateTask/{id}")]
        //The movie object will come from the body of the http call
        public void UpdateTask(int id, Task t)
        {
            Task initial = taskDAL.GetTask(id);
            if (t.TaskName == null || t.TaskName == "")
            {
                t.TaskName = initial.TaskName;
            }

            if (t.TaskDescription == null || t.TaskDescription == "")
            {
                t.TaskDescription = initial.TaskDescription;
            }

            if (t.TmName == null || t.TmName == "")
            {
                t.TmName = initial.TmName;
            }

            if (t.DueDate == null)
            {
                t.DueDate = initial.DueDate;
            }

            //if(t.isCompleted == null)
            //{
            //    t.isCompleted = initial.isCompleted;
            //}

            taskDAL.UpdateTask(id, t);
        }
    }
}
