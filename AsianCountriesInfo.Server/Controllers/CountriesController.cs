using AsianCountriesInfo.Server.Interfaces;
using AsianCountriesInfo.Server.Models;
using AsianCountriesInfo.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

namespace AsianCountriesInfo.Server.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly ICountryService _countryService;

        public CountriesController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Country>>> GetAsianCountries()
        {
            var countries = await _countryService.GetAsianCountriesAsync();
            if (countries == null)
                return NotFound();

            return Ok(countries);
        }
    }
}
