"use client";

import React, { useEffect, useState } from "react";

import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Line,
  Svg,
  PDFDownloadLink,
  Image,
  pdf,
} from "@react-pdf/renderer";

import { createTw } from "react-pdf-tailwind";
import { getDataInstance } from "../getDataInstance";

const tw = createTw({
  theme: {
    fontFamili: {
      sans: ["Nunito"],
    },
  },
});

const styles = StyleSheet.create({
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },

  proponente: {
    textAlign: "justify",
  },

  signature: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },

  signatureLine: {
    borderTop: "5px solid",
  },

  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

export const Pdf = (name, imageSignature) => (
  // <div className="p-9 bg-white">
  <Document>
    <Page size="A4" style={tw("p-12")}>
      <View>
        <Text style={tw("text-sm font-bold")}>
          PROPOSTA DE SEGUROS E AUTOMOVEL RCF-V E APP olá {name}
        </Text>
      </View>

      <View style={tw("mt-9")}>
        <Text style={tw("font-bold text-sm")}>
          SAC: 0800-727-2766 (informação, reclamação e cancelamneto) e
          0800-727-8736 (atendimento exclusivo para deficiente auditivo) ou SITE
          www.portoseguro.com.br - Ouvidoria - 0800-727-1184
        </Text>
        <Line />
      </View>

      <View>
        <Text style={tw("mt-6 text-center")}>DECLARAÇAO PROPONENTE</Text>
      </View>

      <View style={tw("mt-3 text-sm leading-relaxed")}>
        <Text style={styles.proponente}>
          Tomei conhecimento prévio das Condições Gerais do Seguro e do Manual
          do Segurado, que também estão disponíveis no site
          www.portoseguro.com.br. Quando participante do Programa de
          Relacionamento Trânsito+gentil, declaro ainda que tive conhecimento
          prévio do Termo de Adesão disponível no site
          www.transitomaisgentil.com.br. Declaro que todas as informações
          prestadas nesta proposta, no Questionário de Avaliação do Risco e na
          Declaração de Uso (quando houver), por mim ou por meu representante,
          são verdadeiras e completas, estando ciente que ocorrerá a perda de
          direito à indenização caso seja constatada qualquer omissão ou
          inveracidade quanto as informações prestadas, nos termos do artigo 766
          do Código Civil. Por este motivo, obrigo-me a comunicar imediatamente
          a seguradora, por escrito, qualquer alteração quanto ao risco aqui
          informado, inclusive a venda do veículo. Estou ciente que a seguradora
          poderá emitir endosso com eventual cobrança de diferença de prêmio, se
          tiver sido selecionado neste documento e posteriormente constatado: a)
          a não ativação dos serviços do rastreador de fábrica; b) o não
          atendimento da instalação do DAF-V, como dispositivo antifurto; e c)
          que não há sinal do rastreador ativo e/ou que não foram realizados os
          pagamentos do rastreador, quando informado “demais rastreadores
          aceitos pela cia”. No momento da contratação foram oferecidas pela
          seguradora outras opções de coberturas, sendo feita a escolha pelas
          coberturas informadas neste documento. A aceitação da proposta de
          seguro está sujeita à análise do risco; A proposta deverá ser
          protocolada na seguradora ou transmitida eletronicamente em até 5 dias
          corridos da realização da vistoria prévia ou até o vencimento do
          seguro anterior. A PORTO SEGURO CIA DE SEGUROS GERAIS terá o prazo de
          15 dias corridos a contar da data de protocolo da proposta para
          aceitar ou recusar o seguro ou a modificação do risco. No caso de
          solicitação de documentos complementares para a análise e aceitação do
          risco ou da alteração da proposta, o prazo de 15 dias ficará suspenso,
          voltando a vigorar a partir da data da entrega da documentação. Em
          caso de ausência de manifestação por parte da seguradora no prazo
          estipulado, fica caracterizada aceitação tácita do seguro. No caso de
          não concretização, estou ciente que eventual prêmio pago será
          devolvido proporcional aos dias decorridos, sendo atualizado pelo
          IPCA/IBGE caso a devolução seja realizada após 10 dias da recusa da
          proposta. Conforme estabelece o artigo 20, § 3º, II, “d” da Circular
          Susep 612/2020, tratando-se de proponente pessoa jurídica deverão
          obrigatoriamente ser informados os nomes de seus controladores,
          principais administradores e procuradores até o nível de pessoa
          física. Essas informações devem ser prestadas no formulário anexo.
          Declaro que o veículo segurado não será conduzido por pessoa
          inabilitada, com habilitação cassada ou suspensa, ou que não tenha
          habilitação com categoria apropriada para o fim a que se destina o
          veículo e responsabilizo-me pela autenticidade do veículo e de sua
          documentação, inclusive por fato, ato ou circunstância(s) do(s)
          proprietário(s) anterior(es), sob pena de Perda de Direito à
          indenização. Em caso de sinistro, segurado e terceiro terão direito à
          livre escolha de oficina para reparo de seu veículo, sem que isso
          implique por si só na negativa da indenização ou reparação. Se o
          veículo possuir isenção fiscal, fico ciente que a seguradora efetuará
          a quitação dos impostos no caso de indenização integral ocorrido
          dentro do período de isenção, nas hipóteses que a lei assim exigir,
          mediante entrega das guias pelo segurado. A utilização do carro extra,
          se contratado, está sujeita as regras da locadora no ato da
          solicitação. Para mais informações, consulte as Condições Gerais.
          Acerca do pagamento do prêmio, estou ciente que em caso de atraso no
          pagamento, poderei regularizar a parcela pendente desde que acrescida
          de uma taxa de juros de mora de 0,30% ao dia e desde que dentro do
          prazo de cobertura concedido na Tabela de Prazo Curto, restabelecendo
          assim os efeitos da apólice pelo período inicialmente contratado. A
          falta de pagamento do prêmio à vista ou da primeira parcela, implicará
          no cancelamento automático da apólice. Nas demais parcelas
          subsequentes à primeira, a ausência do pagamento do prêmio implicará
          na redução da vigência, resultante da aplicação da tabela de Prazo
          Curto, nos termos constantes das Condições Gerais, inclusive quando a
          forma de pagamento escolhida pelo segurado for o cartão da Porto
          Seguro. Desde já autorizo expressamente que a seguradora encaminhe
          comunicações das empresas do conglomerado Porto Seguro, por meio dos
          contatos aqui disponibilizados. O corretor indicado na proposta é meu
          representante legal neste contrato e em suas respectivas renovações,
          autorizo-o neste ato a transmitir a proposta à seguradora. “O segurado
          poderá consultar a situação cadastral do corretor de seguros e da
          sociedade seguradora no sítio eletrônico www.susep.gov.br, por meio do
          número de seu registro na SUSEP, nome completo, CNPJ ou CPF”. “O
          registro do produto é automático e não representa aprovação ou
          recomendação por parte da Susep”. “As condições
          contratuais/regulamento deste produto protocolizadas pela
          sociedade/entidade junto à Susep poderão ser consultadas no endereço
          eletrônico www.susep.gov.br, de acordo com o número de processo
          constante da apólice, proposta, bilhete, certificado ou no título de
          capitalização”. “O segurado terá sete dias a contar da formalização da
          proposta para pedir o cancelamento do seguro, nos termos da legislação
          vigente, se a proposta tiver sido realizada por meios remotos e nenhum
          serviço ou garantia tenha sido utilizado/a”. ”Em atendimento à
          regulamentação vigente, informamos que incidem as alíquotas PIS 0,65%
          e COFINS 4% sobre a formação de preço.” Declaro ter conhecimento da
          obrigação de expedição de novo certificado de registro de veículo,
          para os casos de transferência de propriedade, nos termos do artigo
          123 do Código de Trânsito Brasileiro. Se o veículo segurado ainda
          estiver em nome do antigo proprietário, a seguradora poderá ser
          impedida de realizar a transferência do bem para o seu nome em
          eventual indenização, motivo pelo qual recomenda-se que o veículo
          segurado esteja devidamente regularizado perante os órgãos públicos
          quanto à atual titularidade do bem.
        </Text>
      </View>

      <View style={styles.signature}>
        {imageSignature && (
          <Image
            src={imageSignature}
            style={styles.image}
            alt="Signature Image"
          />
        )}
        <Svg
          height="10"
          width="100%"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Line
            x1="100"
            y1="10"
            x2="420"
            y2="10"
            strokeWidth={2}
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <Text style={styles.signatureLine}>Assinatura do Proponente</Text>
      </View>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
  // </div>
);

function PdfTest() {
  const [client, setclient] = useState(false);

  useEffect(() => {
    setclient(true);
  }, []);

  return (
    <>
      {client && (
        <PDFViewer className="w-full h-full Container" showToolbar={true}>
          {Pdf()}
        </PDFViewer>
      )}
    </>
  );
}

export default PdfTest;
