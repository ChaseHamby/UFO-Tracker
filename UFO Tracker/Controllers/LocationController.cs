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

        [HttpGet("{locationId}")]

        public ActionResult GetSingleLocation(int Id)
        {
            var location = _locationRepository.GetSingleLocation(Id);

            return Ok(location);
        }


        [HttpPost]
        public ActionResult AddLocation(CreateLocationRequest createRequest)
        {
            var newLocation = _locationRepository.AddLocation(
                createRequest.City,
                createRequest.State,
                createRequest.StreetAddress,
                createRequest.Zipcode
                );

            return Created($"api/location/{newLocation.Id}", newLocation);
        }

    }
}