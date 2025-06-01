import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function ExcelRelatorio({ dados }) {
  const exportarParaExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Vendas');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([excelBuffer], {
      type: 'application/octet-stream',
    });

    saveAs(blob, 'tabela_vendas.xlsx');
  };

  return (
    <button onClick={exportarParaExcel} style={{ marginTop: 10 }}>
      Exportar para Excel
    </button>
  );
}
