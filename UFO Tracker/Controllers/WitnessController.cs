using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UFO_Tracker.Data;

namespace UFO_Tracker.Controllers
{
    [Route("api/[controller]")]
    public class WitnessController : ControllerBase
    {
        readonly WitnessRepository _witnessRepository;
        public WitnessController()
        {
            _witnessRepository = new WitnessRepository();
        }

        [HttpGet]

        public ActionResult GetAllWitnesses()
        {
            var witnesses = _witnessRepository.GetAll();

            return Ok(witnesses);
        }
    }
}