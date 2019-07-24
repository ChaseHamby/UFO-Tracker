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
        public Location AddLocation(CreateLocationRequest newLocation)
        {
            var locationRepo = new LocationRepository();

            using (var db = new SqlConnection(ConnectionString))
            {
                var insertQuery = @"
                        INSERT INTO [dbo].[Locations]
                                   ([City]
                                   ,[State]
                                   ,[StreetAddress]
                                   ,[Zipcode]
                        )
                        output inserted.*
                             VALUES
                                   (@city,
                                    @state,
                                    @streetAddress,
                                    @zipcode
                        )";

                var parameters = new
                {
                    City = newLocation.City,
                    State = newLocation.State,
                    StreetAddress = newLocation.StreetAddress,
                    Zipcode = newLocation.Zipcode,
                };

                var newLocations = db.QueryFirstOrDefault<Location>(insertQuery, parameters);

                if (newLocation != null)
                {
                    return newLocations;
                }

                throw new Exception("Could not create location");
            }
        }

        public Location GetSingleLocation(int Id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var singleLocation = db.QueryFirstOrDefault<Location>(@"
                    Select * From Locations
                    WHERE id = @id",
                    new { Id });

                return singleLocation;
            }
        }
    }
}
