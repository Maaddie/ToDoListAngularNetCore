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
    }
}
