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
    public class FavoriteSightingsController : Controller
    {
        readonly FavoriteSightingRepository _favoriteSightingRepository;

        public FavoriteSightingsController()
        {
            _favoriteSightingRepository = new FavoriteSightingRepository();
        }

        [HttpGet("{SightingId}")]

        public ActionResult GetSingleFavoriteSighting(int SightingId)
        {
            var sighting = _favoriteSightingRepository.GetSingleFavoriteSighting(SightingId);

            return Ok(sighting);
        }

        [HttpPost]
        public ActionResult AddFavoriteSighting(CreateFavoriteSightingsRequest createRequest)
        {

            var newFavoriteSighting = _favoriteSightingRepository.AddFavoriteSighting(createRequest.SightingId);

            return Created($"api/likedProperties/{newFavoriteSighting.Id}", newFavoriteSighting);

        }

        [HttpDelete("{SightingId}")]
        public ActionResult DeleteLikedProperty(int SightingId)
        {
            _favoriteSightingRepository.DeleteFavoriteSighting(SightingId);

            return Ok("Goodnight...");
        }

        [HttpGet()]
        public ActionResult GetAllFavoriteSightings()
        {
            var favoriteSightings = _favoriteSightingRepository.GetAllFavoriteSightings();

            return Ok(favoriteSightings);
        }
    }
}