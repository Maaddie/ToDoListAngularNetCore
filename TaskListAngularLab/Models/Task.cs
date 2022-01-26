using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskListAngularLab.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        public string TmName { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public DateTime DueDate { get; set; }
        public bool isCompleted { get; set; }
    }
}
