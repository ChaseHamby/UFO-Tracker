using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UFO_Tracker.Models
{
    public class CreateUserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public double Cell { get; set; }
        //public bool Anonymous { get; set; }
        //public int WitnessId { get; set; }
    }
}
