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
        public Location AddLocation(string city, string state, string streetAddress, int zipcode)
        {
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
                    City = city,
                    State = state,
                    StreetAddress = streetAddress,
                    Zipcode = zipcode,
                };

                var newLocation = db.QueryFirstOrDefault<Location>(insertQuery, parameters);

                if (newLocation != null)
                {
                    return newLocation;
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
