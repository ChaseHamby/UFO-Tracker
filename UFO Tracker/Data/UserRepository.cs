﻿using Dapper;
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

        public User AddUser(CreateUserRequest newUser)
        {
            var userRepo = new UserRepository();

            using (var db = new SqlConnection(ConnectionString))
            {
                var insertQuery = @"
                        INSERT INTO [dbo].[Users]
                                   ([FirstName]
                                   ,[LastName]
                                   ,[Email]
                                   ,[Cell]
                        )
                        output inserted.*
                             VALUES
                                   (@firstName,
                                    @lastName,
                                    @email,
                                    @cell
                        )";

                var parameters = new
                {
                    FirstName = newUser.FirstName,
                    LastName = newUser.LastName,
                    Email = newUser.Email,
                    Cell = newUser.Cell
                };

                var newUsers = db.QueryFirstOrDefault<User>(insertQuery, parameters);

                if (newUsers != null)
                {
                    return newUsers;
                }

                throw new Exception("Could not create user");
            }
        }
    }
}
