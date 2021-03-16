import React from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
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
