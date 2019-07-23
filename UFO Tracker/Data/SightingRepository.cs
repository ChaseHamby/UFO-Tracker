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

        public IEnumerable<Sighting> GetAllLocationsWithSightings()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var locations = db.Query<Sighting>(@"SELECT *
                                                    FROM Sightings
                                                    JOIN Locations on Locations.Id = Sightings.LocationId").ToList();

                return locations;
            }
        }

        public Sighting AddSighting(string description, string dateOfEvent, string duration, string shape, float cityLatitude, float cityLongitude)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var insertQuery = @"
                        INSERT INTO [dbo].[Sightings]
                                   ([Description]
                                   ,[DateOfEvent]
                                   ,[Duration]
                                   ,[Shape]
                                   ,[CityLatitude]
                                   ,[CityLongitude]
                        )
                        output inserted.*
                             VALUES
                                   (@description,
                                    @dateOfEvent,
                                    @duration,
                                    @shape,
                                    @cityLatitude,
                                    @cityLongitude
                        )";

                var parameters = new
                {
                    Description = description,
                    DateOfEvent = dateOfEvent,
                    Duration = duration,
                    Shape = shape,
                    CityLatitude = cityLatitude,
                    CityLongitude = cityLongitude
                };

                var newSighting = db.QueryFirstOrDefault<Sighting>(insertQuery, parameters);

                if (newSighting != null)
                {
                    return newSighting;
                }

                throw new Exception("Could not create sighting");
            }
        }

    }
}
