import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js'
import MyGoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData) {
    var name = cityData.city.name;
    var temps = cityData.list.map(weather => weather.main.temp);
    var pressures = cityData.list.map(weather => weather.main.pressure);
    var humidities = cityData.list.map(weather => weather.main.humidity);
    var { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><MyGoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart dataTemps={temps} color="orange" units="°C"/>
        </td>
        <td>
          <Chart dataTemps={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <Chart dataTemps={humidities} color="black" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Temperatura (°C)</th>
            <th>Pressão Atmosférica (hPa)</th>
            <th>Humidade (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
