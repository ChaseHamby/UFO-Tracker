using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UFO_Tracker.Models
{
    public class CreateLocationRequest
    {
        public string City { get; set; }
        public string State { get; set; }
        public string StreetAddress { get; set; }
        public int Zipcode { get; set; }
    }
}
