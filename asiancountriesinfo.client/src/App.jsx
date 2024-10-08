import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './component/MainPage/MainPage';
import CountryDetails from './component/CountryDetails/CountryDetails';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { getAsianCountries } from './services/CountriesService';

function App() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAsianCountries()

                setCountries(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCountries();
    }, []);

  


    return (
    
        <Router>
            <Routes>
                <Route path="/" element={<MainPage countries={countries}  />} />
                <Route path="/details/:countryName" element={<CountryDetails countries={countries}/>} />
            </Routes>
        </Router>
    );

}

export default App;