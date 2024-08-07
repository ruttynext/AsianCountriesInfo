import { useParams, useNavigate } from 'react-router-dom';

const CountryDetails = ({ countries }) => {

    const { countryName } = useParams();
    const navigate = useNavigate();
    const country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase());

    if (!country) return <div>No country selected</div>;

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <img src={country.flag} alt={`${country.name} flag`} style={{ width: '200px' }} />
            <h3>Currencies:</h3>
            <ul>
                {country.currencies.map(currency => (
                    <li key={currency.code}>
                        {currency.name} ({currency.symbol})
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default CountryDetails;