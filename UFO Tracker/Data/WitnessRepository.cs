using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace UFO_Tracker.Data
{
    public class WitnessRepository
    {
        const string ConnectionString = "Server=localhost; Database=UFO-Tracker; Trusted_Connection=True;";

        public IEnumerable<Witness> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var witnesses = db.Query<Witness>("Select * from Witnesses").ToList();

                return witnesses;
            }
        }
    }
}
