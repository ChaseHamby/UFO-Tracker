using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UFO_Tracker.Models;

namespace UFO_Tracker.Data
{
    public class LocationRepository
    {
        const string ConnectionString = "Server=localhost; Database=UFO-Tracker; Trusted_Connection=True;";

        public IEnumerable<Location> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var locations = db.Query<Location>("Select * from Locations").ToList();

                return locations;
            }
        }
    }
}
