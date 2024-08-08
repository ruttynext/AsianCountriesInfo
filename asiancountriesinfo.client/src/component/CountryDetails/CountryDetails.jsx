import { useParams, useNavigate } from 'react-router-dom';
import CountryCard from '../CountryCard/CountryCard';

const CountryDetails = ({ countries }) => {

    const { countryName } = useParams();
    const navigate = useNavigate();
    const country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase());

    if (!country) return <div>No country selected</div>;

    return (
        <div>
            <CountryCard country={country}>
                <h4>Currencies:</h4>
                <ul>
                    {country.currencies.map(currency => (
                        <li key={currency.code}>
                            {currency.name} ({currency.symbol})
                        </li>
                    ))}
                </ul>
            </CountryCard>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default CountryDetails;