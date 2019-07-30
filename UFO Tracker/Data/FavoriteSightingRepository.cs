using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UFO_Tracker.Models;

namespace UFO_Tracker.Data
{
    public class FavoriteSightingRepository
    {
        const string ConnectionString = "Server=localhost; Database=UFO-Tracker; Trusted_Connection=True;";

        public IEnumerable<FavoriteSighting> GetAllFavoriteSightings()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var sightings = db.Query<FavoriteSighting>("Select * from FavoriteSightings").ToList();

                return sightings;
            }
        }

        public FavoriteSighting AddFavoriteSighting(int sightingId)
        {
            var query = @"Insert into FavoriteSightings (sightingId)
                        Output inserted.*
                        Values (@sightingId)";
            var parameters = new { sightingId };

            using (var db = new SqlConnection(ConnectionString))
            {
                var newFavoriteSighting = db.QueryFirstOrDefault<FavoriteSighting>(query, parameters);

                if (newFavoriteSighting != null)
                {
                    return newFavoriteSighting;
                }
            }
            throw new Exception("No newFavoriteSighting created");
        }

        public void DeleteFavoriteSighting(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var parameter = new { Id = id };

                var deleteQuery = "Delete From FavoriteSightings where Id = @id";

                var rowsAffected = db.Execute(deleteQuery, parameter);

                if (rowsAffected != 1)
                {
                    throw new Exception("Did not delete");
                }
            }
        }
    }

    }
