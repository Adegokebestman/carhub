// const axios = require('axios');

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'e304a62ba1mshcace166e17f35a8p183845jsn8e5bf1efd2a0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
      });

      const result = await response.json();
      return result

}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    // Base rental price per day in dollars
    const mileageFactor = 0.1;
    // Addittional rate per mile
    const ageFactor = 0.05;
    // Additonal rate per year of vehicle age

    // calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per yeat
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};