using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace UFO_Tracker.Data
{
    public class LocationSightingsRepository
    {
        const string ConnectionString = "Server=localhost; Database=UFO-Tracker; Trusted_Connection=True;";

        public IEnumerable<LocationSightings> GetLocationsWithSightings()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var locations = db.Query<LocationSightings>("Select * from Locations join sightings on sightings.DateOfEvent = locations.DateOfEvent").ToList();

                return locations;
            }
        }
    }
}
