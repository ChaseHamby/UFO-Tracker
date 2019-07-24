using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UFO_Tracker.Data;
using UFO_Tracker.Models;

namespace UFO_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        readonly LocationRepository _locationRepository;
        public LocationController()
        {
            _locationRepository = new LocationRepository();
        }

        [HttpGet]

        public ActionResult GetAllLocations()
        {
            var locations = _locationRepository.GetAll();

            return Ok(locations);
        }

        [HttpGet("{Id}")]

        public ActionResult GetSingleLocation(int Id)
        {
            var location = _locationRepository.GetSingleLocation(Id);

            return Ok(location);
        }


        [HttpPost]
        public ActionResult AddLocation(CreateLocationRequest newLocation)
        {
            var newLocations = _locationRepository.AddLocation(newLocation);

            return Ok(newLocations);
        }

    }
}