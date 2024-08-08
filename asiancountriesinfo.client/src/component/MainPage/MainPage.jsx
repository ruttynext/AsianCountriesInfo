import React, { useEffect, useState, useMemo } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';


const MainPage = ({ countries, onCountrySelect }) => {

    const [stringCountrySearch, setStringCountrySearch] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setStringCountrySearch(event.target.value);
    };

    const handleCountrySelect = (countryName) => {
        navigate(`/details/${countryName}`);
    };

    const filteredCountries = useMemo(() => {
        return countries.filter(country => country.name.toLowerCase().includes(stringCountrySearch.toLowerCase()));
    }, [countries, stringCountrySearch]);

    const renderContent = () => {
        if (countries.length === 0) {
            return <p>Loading...</p>;
        }

        if (filteredCountries.length === 0) {
            return <p>No countries found</p>;
        }

        return filteredCountries.map((item) => (
            <CountryCard key={item.name} country={item} />
        ));
    };

    return (
        <div>
            <div className="fixed-header">
                <h1>Countries in Asia</h1>
                <div>
                    <select onChange={e => handleCountrySelect(e.target.value)}>
                        <option value="">Select a country</option>
                        {countries.map(country => (
                            <option key={country.name} value={country.name}>{country.name}</option>
                        ))}
                    </select>
                </div>

                <input
                    type="text"
                    placeholder="Search for a country"
                    value={stringCountrySearch}
                    onChange={handleSearchChange}
                />
            </div>

            <div className='container-countries-cards'>
                {renderContent()}
            </div>

        </div>
    );
};

export default MainPage;
