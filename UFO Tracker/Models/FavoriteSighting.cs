﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UFO_Tracker.Models
{
    public class FavoriteSighting
    {
        public int Id { get; set; }
        public int SightingId { get; set; }
        public string Description { get; set; }
        public string DateOfEvent { get; set; }
        public string Duration { get; set; }
        public string Shape { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StreetAddress { get; set; }
        public int Zipcode { get; set; }
        public float CityLongitude { get; set; }
        public float CityLatitude { get; set; }
        public string Image { get; set; }
    }
}
