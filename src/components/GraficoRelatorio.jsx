import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function GraficoRelatorio() {
  const data = {
    labels: ['Refrigerante', 'Hambúrguer', 'Pizza'],
    datasets: [
      {
        label: 'Vendas',
        data: [30, 59, 73],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <h3>Gráfico de Vendas</h3>
      <Bar data={data} />
    </div>
  );
}
