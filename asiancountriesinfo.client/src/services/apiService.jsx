
const API_URL = 'https://localhost:7246/Countries';

export const getAsianCountries = async () => {
    try {
        const response = await fetch('https://localhost:7246/Countries');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
};
