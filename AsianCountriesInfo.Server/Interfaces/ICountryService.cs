using AsianCountriesInfo.Server.Models;

namespace AsianCountriesInfo.Server.Interfaces
{
    public interface ICountryService
    {
        Task<List<Country>> GetAsianCountriesAsync();
    }
}


