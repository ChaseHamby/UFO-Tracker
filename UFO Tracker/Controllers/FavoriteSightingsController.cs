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

        [HttpPost]
        public ActionResult AddFavoriteSighting(CreateFavoriteSightingsRequest createRequest)
        {

            var newFavoriteSighting = _favoriteSightingRepository.AddFavoriteSighting(createRequest.SightingId);

            return Created($"api/likedProperties/{newFavoriteSighting.Id}", newFavoriteSighting);

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteLikedProperty(int id)
        {
            _favoriteSightingRepository.DeleteFavoriteSighting(id);

            return Ok("Goodnight...");
        }

        [HttpGet()]
        public ActionResult GetAllFavoriteSightings()
        {
            var favoriteSightings = _favoriteSightingRepository.GetAllFavoriteSightings();

            return Ok(favoriteSightings);
        }

        //[HttpGet("{id}")]
        //public ActionResult GetSingleFavoriteSighting(int id)
        //{
        //    var favoriteSightingById = _favoriteSightingRepository.GetSingleFavoriteSighting(id);

        //    return Ok(favoriteSightingById);
        //}
    }
}