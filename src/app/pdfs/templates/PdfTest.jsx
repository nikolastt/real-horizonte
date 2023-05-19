"use client";

import React, { useEffect, useState } from "react";

import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

export const Pdf = (
  <Document>
    <Page size="A4">
      <View>
        <Text>Section #1</Text>
      </View>

      <View>
        <Text>Section #2 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
      </View>
    </Page>

    <Page size="A4">
      <View>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

function PdfTest() {
  const [client, setclient] = useState(false);

  useEffect(() => {
    setclient(true);
  }, []);

  return (
    <>
      {client && (
        <div>
          <PDFViewer className="w-full h-full Container">Teste</PDFViewer>
        </div>
      )}
    </>
  );
}

export default PdfTest;
