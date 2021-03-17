import React, {useState} from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {

  const initWeather =[];

  const [weather, setWeather] = useState(initWeather);

  fetch('https://oppilas-4.azurewebsites.net/api/HttpTriggerCSharp2?code=Zh0lRvpNdEWclxNoZGu4ANfJ8evb0qOABbfqOmDBMRvD7Csko1mSlQ==&deviceId=250033001847393035313138&amount=10')
    .then(response => response.json())
    .then(json => setWeather([...json]));

  let humtempkey = 1;
  const rows = () => weather.map(temphum => {
  return <div key={humtempkey++}>
    {temphum.Temp}
  </div>
  })

  return (
    <div className="App">
    {rows()}
  <div style={{ display: 'flex', maxWidth: 1900 }}>
  <Chart
    width={1900}
    height={300}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Aika', '%'],
      ['13:45', 27],
      ['13:40', 26],
      ['13:35', 26],
      ['13:30', 25.5],
      ['13:25', 27],
      ['13:20', 26.5],
      ['13:15', 26],
      ['13:10', 25],
      ['13:05', 25],
      ['13:00', 25.5],
    ]}
    options={{
      title: 'Ilmankosteus',
      chartArea: { width: '50%' },
      hAxis: {
        minValue: 0,
      },
    }}
    legendToggle
  />
  </div>
  <div style={{ display: 'flex', maxWidth: 900 }}>
  <Chart
    width={1900}
    height={'300px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Aika','°C'],
      ['13:45', 27],
      ['13:40', 26],
      ['13:35', 26],
      ['13:30', 25.5],
      ['13:25', 27],
      ['13:20', 26.5],
      ['13:15', 26],
      ['13:10', 25],
      ['13:05', 25],
      ['13:00', 25.5],
    ]}
    options={{
      title: 'Lämpötila',
      hAxis: { title: '', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      chartArea: { width: '50%', height: '70%' },
    }}
  />
</div>
    </div>
  );
}

export default App;
