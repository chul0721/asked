import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document'
import React from 'react'

class PortfolioDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </Html>
    )
  }
}

export default PortfolioDocument
