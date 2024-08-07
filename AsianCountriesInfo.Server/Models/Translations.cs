using System.Text.Json.Serialization;

namespace AsianCountriesInfo.Server.Models
{
    public class Translations
    {
        [JsonPropertyName("br")]
        public string Br { get; set; }

        [JsonPropertyName("pt")]
        public string Pt { get; set; }

        [JsonPropertyName("nl")]
        public string Nl { get; set; }

        [JsonPropertyName("hr")]
        public string Hr { get; set; }

        [JsonPropertyName("fa")]
        public string Fa { get; set; }

        [JsonPropertyName("de")]
        public string De { get; set; }

        [JsonPropertyName("es")]
        public string Es { get; set; }

        [JsonPropertyName("fr")]
        public string Fr { get; set; }

        [JsonPropertyName("ja")]
        public string Ja { get; set; }

        [JsonPropertyName("it")]
        public string It { get; set; }

        [JsonPropertyName("hu")]
        public string Hu { get; set; }
    }
}
