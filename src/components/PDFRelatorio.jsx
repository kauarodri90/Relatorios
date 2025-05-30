import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, marginBottom: 10 },
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1 },
  row: { flexDirection: "row" },
  cell: { padding: 5, borderRightWidth: 1, borderBottomWidth: 1 },
});

const MyPDF = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Relatório de Vendas</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, { width: 200 }]}>Produto</Text>
          <Text style={[styles.cell, { width: 100 }]}>Vendas</Text>
        </View>
        {[
          { produto: 'Refrigerante', vendas: 30 },
          { produto: 'Hambúrguer', vendas: 59 },
          { produto: 'Pizza', vendas: 73 },
        ].map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.cell, { width: 200 }]}>{item.produto}</Text>
            <Text style={[styles.cell, { width: 100 }]}>{item.vendas}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default function PDFRelatorio() {
  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <PDFDownloadLink document={<MyPDF />} fileName="relatorio.pdf">
        {({ loading }) => (loading ? 'Gerando PDF...' : 'Baixar Relatório PDF')}
      </PDFDownloadLink>
    </div>
  );
}
