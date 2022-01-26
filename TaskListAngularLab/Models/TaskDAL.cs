using Dapper;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;


namespace TaskListAngularLab.Models
{
    public class TaskDAL
    {

       public List<Task> GetTasks()
        {
            using(var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from todotasks";
                connect.Open();
                List<Task> output = connect.Query<Task>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Task GetTask(int id)
        {
            List<Task> output = GetTasks();
            Task match;
            try
            {
                match = output.Where(t => t.Id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Task();
                match.TaskName = $"Task at index {id} does not exist, please try another id";
            }
            return match;
        }

        public void InsertTask(Task t)
        {
            string sql = $"insert into todotasks values(0, '{t.TmName}', '{t.TaskName}', '{t.TaskDescription}', '{t.DueDate.ToString("yyyy-MM-dd")}', {t.isCompleted})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }

        }
    }
}
