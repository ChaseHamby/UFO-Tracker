using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UFO_Tracker.Data;

namespace UFO_Tracker.Controllers
{
    [Route("api/[controller]")]
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

    }
}
