import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js'

class WeatherList extends Component {
  renderWeather(cityData) {
    var name = cityData.city.name;
    var temps = cityData.list.map(weather => weather.main.temp);
    var pressures = cityData.list.map(weather => weather.main.pressure);
    var humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart dataTemps={temps} color="orange" />
        </td>
        <td>
          <Chart dataTemps={pressures} color="green" />
        </td>
        <td>
          <Chart dataTemps={humidities} color="black" />
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
            <th>Temperatura</th>
            <th>Pressão Atmosférica</th>
            <th>Humidade</th>
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
