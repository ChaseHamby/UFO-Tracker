using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UFO_Tracker.Models;

namespace UFO_Tracker.Data
{
    public class SightingRepository
    {
        const string ConnectionString = "Server=localhost; Database=UFO-Tracker; Trusted_Connection=True;";

        public IEnumerable<Sighting> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var sightings = db.Query<Sighting>("Select * from Sightings").ToList();

                return sightings;
            }
        }

    }
}
