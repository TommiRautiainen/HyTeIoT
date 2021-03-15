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
      ['', '%', ''],
      ['13:45', 27, 0],
      ['13:40', 26, 0],
      ['13:35', 26, 0],
      ['13:30', 25.5, 0],
      ['13:25', 27, 0],
      ['13:20', 26.5, 0],
      ['13:15', 26, 0],
      ['13:10', 25, 0],
      ['13:05', 25, 0],
      ['13:00', 25.5, 0],
    ]}
    options={{
      title: 'Ilmankosteus',
      chartArea: { width: '50%' },
      hAxis: {
        title: '',
        minValue: 0,
      },
      vAxis: {
        title: '',
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
      ['','C',''],
      ['13:45', 27, 0],
      ['13:40', 26, 0],
      ['13:35', 26, 0],
      ['13:30', 25.5, 0],
      ['13:25', 27, 0],
      ['13:20', 26.5, 0],
      ['13:15', 26, 0],
      ['13:10', 25, 0],
      ['13:05', 25, 0],
      ['13:00', 25.5, 0],
    ]}
    options={{
      title: 'Lämpötila',
      hAxis: { title: '', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      // For the legend to fit, we make the chart area smaller
      chartArea: { width: '50%', height: '70%' },
      // lineWidth: 25
    }}
  />
</div>
    </div>
  );
}

export default App;
