using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UFO_Tracker.Data;

namespace UFO_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationSightingsController : Controller
    {
        readonly LocationSightingsRepository _locationSightingsRepository;
        public LocationSightingsController()
        {
            _locationSightingsRepository = new LocationSightingsRepository();
        }

        [HttpGet]
        public ActionResult GetLocationsWithSightings()
        {
            var location = _locationSightingsRepository.GetLocationsWithSightings();

            return Ok(location);
        }
    }
}