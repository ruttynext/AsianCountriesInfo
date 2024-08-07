import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
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

    return (
        <div>
            <div className="fixed-header">
                <h1>Countries in Asia</h1>
                <select onChange={e => handleCountrySelect(e.target.value)}>
                    <option value="">Select a country</option>
                    {countries.map(country => (
                        <option key={country.name} value={country.name}>{country.name}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search for a country"
                    value={stringCountrySearch}
                    onChange={handleSearchChange}
                />
            </div>
            <div className='container-countries-cards'>
                {
                    countries.filter((ff) => ff.name.toLowerCase().includes(stringCountrySearch.toLowerCase()))
                        .map((item) => {
                            return (
                                <CountryCard key={item.name} country={item} />
                            )
                        })

                }
            </div>
        </div>
    );
};

export default MainPage;
