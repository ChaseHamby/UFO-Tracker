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
    public class SightingController : ControllerBase
    {
        readonly SightingRepository _sightingRepository;

        public SightingController()
        {
            _sightingRepository = new SightingRepository();
        }

        [HttpGet]

        public ActionResult GetAllSightings()
        {
            var sightings = _sightingRepository.GetAll();

            return Ok(sightings);
        }

        [HttpGet("locationSightings")]

        public ActionResult GetAllLocationsFromSightings()
        {
            var locations = _sightingRepository.GetAllLocationsWithSightings();

            return Ok(locations);
        }

        [HttpPost]
        public ActionResult AddSighting(CreateSightingRequest newSighting)
        {
            var newSightings = _sightingRepository.AddSighting(newSighting);

            return Ok(newSightings);
        }

    }
}
