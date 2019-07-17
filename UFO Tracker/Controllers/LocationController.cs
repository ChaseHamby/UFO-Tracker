using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UFO_Tracker.Data;

namespace UFO_Tracker.Controllers
{
    [Route("api/[controller]")]
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

        //[HttpGet("locationSightings")]

        //public ActionResult GetAllLocationsFromSightings()
        //{
        //    var locations = _locationRepository.GetAllLocationsWithSightings();

        //    return Ok(locations);
        //}
    }
}