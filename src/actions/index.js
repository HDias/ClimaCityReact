// Aula 58 10:30
import Axios from 'axios';

const API_KEY = '2bfbe0e9cc44bdf3a737973da091113c';
import Config from '../config/config';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const request = Axios.get(API_URL, {
    params: {
      q: `${city},br`,
      appid: Config.openWeather.key
    }
  });

  console.log('Request', request);

  // selectBook é um ActionCreatr, isto precisa retornar uma Action
  // um object com um tipo de propriedade
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
