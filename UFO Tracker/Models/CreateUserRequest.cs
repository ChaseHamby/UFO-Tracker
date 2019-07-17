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
        public int CellPhone { get; set; }
        public bool Anonymous { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public int Zipcode { get; set; }
        public int WitnessId { get; set; }
    }
}
