using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using UFO_Tracker.Models;

namespace UFO_Tracker.Data
{
    public class UserRepository
    {
        const string ConnectionString = "Server=localhost; Database=UFO-Tracker; Trusted_Connection=True;";
        public IEnumerable<User> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var users = db.Query<User>("Select * from Users").ToList();

                return users;
            }

        }
    }
}
