import React from 'react';
import GraficoRelatorio from './components/GraficoRelatorio';
import TabelaRelatorio from './components/TabelaRelatorio';
import PDFRelatorio from './components/PDFRelatorio';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Relatório de Vendas</h1>
      <GraficoRelatorio />
      <TabelaRelatorio />
      <PDFRelatorio />
    </div>
  );
}

export default App;
