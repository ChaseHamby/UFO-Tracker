﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UFO_Tracker.Models
{
    public class Sighting
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string DateOfEvent { get; set; }
        public string Duration { get; set; }
        public string Shape { get; set; }
        public int LocationId { get; set; }
        public int WitnessId { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public float CityLatitude { get; set; }
        public float CityLongitude { get; set; }
    }
}
