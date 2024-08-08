
import { get } from "./ApiService";

const API_URL = 'https://localhost:7246/Countries';

export const getAsianCountries = async () => {
    try {
        const data = await get(API_URL);
        return data;
    } catch (error) {
        console.error('Error getting Asian countries:', error);
        throw error; 
    }
};