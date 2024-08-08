import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country, children }) => {

    return (
        <div className="country-card">
            <div className="country-card-content">
                <div className="country-info">
                    <h2>{country.name}</h2>
                    <p>Capital: {country.capital}</p>
                    {children}
                </div>
                <div className="country-flag">
                    <img src={country.flag} alt={`Flag of ${country.name}`} />
                </div>
              
            </div>
        </div>
    );
};

export default CountryCard;
