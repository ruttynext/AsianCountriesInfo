using System.Text.Json.Serialization;

namespace AsianCountriesInfo.Server.Models
{
    public class Flags
    {
        [JsonPropertyName("svg")]
        public string Svg { get; set; }

        [JsonPropertyName("png")]
        public string Png { get; set; }
    }
}
