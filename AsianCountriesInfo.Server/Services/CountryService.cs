using AsianCountriesInfo.Server.Interfaces;
using AsianCountriesInfo.Server.Models;
using System.Diagnostics.Metrics;
using System.Text.Json;

namespace AsianCountriesInfo.Server.Services
{
    public class CountryService : ICountryService
    {
        private readonly HttpClient _httpClient;

        public CountryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Country>> GetAsianCountriesAsync()
        {
            var response = await _httpClient.GetStringAsync("https://restcountries.com/v2/all");
            var countries = JsonSerializer.Deserialize<List<Country>>(response);
            return countries?.FindAll(c => c.Region == "Asia");
        }
    }

}