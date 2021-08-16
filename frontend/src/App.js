import logo from './logo.svg';
import './App.css';

import React, { useState,useEffect, Component } from "react"
import axios from 'axios'
import ReactECharts from 'echarts-for-react'


function App() {

  const [weatherData, setWeatherData] = useState([])
  useEffect(() => {
      axios ({
        method: "GET",
        url: "http://127.0.0.1/api/weather/"
      }).then(response => {
        setWeatherData(response.data)
      })
  },[])
    let dataArray = weatherData.map((item) => item.dateOfWeatherSummary) 
    let temperatureArray = weatherData.map((item) => item.temperature)
    let pressureArray = weatherData.map((item) => item.atmospherePressure)
    let humidityArray = weatherData.map((item) => item.humidity)


    const temperatureGraphic = {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: 'category',
        data: dataArray,
        name: 'Дата исследования',
        nameLocation: 'middle',
      },
      yAxis: {
        type: 'value',
        name: 'Температура ℃',
        nameLocation: 'middle',
        nameGap: 25
      },
      series: [
        {
          data: temperatureArray,
          type: 'line',
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
    };

    const pressureGraphic = {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: 'category',
        data: dataArray,
        name: 'Дата исследования',
        nameLocation: 'middle',
      },
      yAxis: {
        type: 'value',
        name: 'Атмосферное давление, мм.рт.ст',
        nameLocation: 'middle',
        nameGap: 28
      },
      series: [
        {
          data: pressureArray,
          type: 'line',
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
    };
    const humidityGraphic = {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: 'category',
        data: dataArray,
        name: 'Дата исследования',
        nameLocation: 'middle',
        
      },
      yAxis: {
        type: 'value',
        name: 'Влажность, %',
        nameLocation: 'middle',
        nameGap: 25
      },
      series: [
        {
          data: humidityArray,
          type: 'line',
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
    };
  return (
    <div className="App">
     <h1> Echarts графики (React + Django + Echarts + PostgreSQL)</h1>
    
     <div class = "Graphic">
      <ReactECharts option={temperatureGraphic} />
     </div>
     <div class = "Graphic">
      <ReactECharts option={pressureGraphic} />
     </div>
     <div class = "Graphic">
      <ReactECharts option={humidityGraphic} />
     </div>
    </div>

  );
}
  
export default App;