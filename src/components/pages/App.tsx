
import { Bar, Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;