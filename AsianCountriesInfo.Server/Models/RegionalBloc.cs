using System.Text.Json.Serialization;

namespace AsianCountriesInfo.Server.Models
{
    public class RegionalBloc
    {
        [JsonPropertyName("acronym")]
        public string? Acronym { get; set; }

        [JsonPropertyName("name")]
        public string? Name { get; set; }
    }
}
