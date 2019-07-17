using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UFO_Tracker.Data;

namespace UFO_Tracker.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        readonly UserRepository _userRepository;

        public UserController()
        {
            _userRepository = new UserRepository();
        }

        [HttpGet]
        public ActionResult GetAllUsers()
        {
            var users = _userRepository.GetAll();

            return Ok(users);
        }
    }
}