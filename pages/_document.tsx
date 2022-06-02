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
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5036006381362212"
            crossOrigin="anonymous"
          />
        </Head>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </Html>
    )
  }
}

export default PortfolioDocument
