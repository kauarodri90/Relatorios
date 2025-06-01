import React from 'react';
import ExcelRelatorio from './ExcelRelatorio';

export default function TabelaRelatorio() {
  const dados = [
    { produto: 'Produto A', vendas: 30 },
    { produto: 'Produto B', vendas: 59 },
    { produto: 'Produto C', vendas: 73 },
  ];

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <h3>Tabela de Vendas</h3>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Vendas</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.produto}</td>
              <td>{item.vendas}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botão de exportação */}
      <ExcelRelatorio dados={dados} />
    </div>
  );
}
