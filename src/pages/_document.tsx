import * as React from "react";

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

type DocumentProps = {
  styleTags: Array<React.ReactElement<{}>>;
};

export default class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.FIREBASE_MEASUREMENT_ID});
      `,
    };
  }
  injectSvgSprite() {
    return {
      __html: `
      function injectSvgSprite(path) {
      
        var ajax = new XMLHttpRequest();
        ajax.open("GET", path, true);
        ajax.send();
        ajax.onload = function(e) {
        var div = document.createElement("div");
        div.className = 'd-none';
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
        }
    }
    injectSvgSprite('https://bootstraptemple.com/files/icons/orion-svg-sprite.svg'); 
  `,
    };
  }
  runFirebase() {
    return {
      __html: `
      var firebaseConfig = {
        apiKey: ${process.env.FIREBASE_API_KEY},
        authDomain: ${process.env.FIREBASE_AUTH_DOMAIN},
        databaseURL: ${process.env.FIREBASE_DATABASE_URL},
        projectId: ${process.env.FIREBASE_PROJECT_ID},
        storageBucket: ${process.env.FIREBASE_STORAGE_BUCKET},
        messagingSenderId: ${process.env.FIREBASE_MESSAGING_SENDER_ID},
        appId: ${process.env.FIREBASE_APP_ID},
        measurementId: ${process.env.FIREBASE_MEASUREMENT_ID}
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      `,
    };
  }
  public render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          {styleTags}
          <script
              data-ad-client={`${process.env.ADS_CLIENT}`}
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

            <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
            <script dangerouslySetInnerHTML={this.runFirebase()} />
          <script
            src={`https://kit.fontawesome.com/${process.env.FONTAWESOME}.js`}
          ></script>

          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.FIREBASE_MEASUREMENT_ID}`}
            />

            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            <script data-ad-client={`${process.env.G_ADS_PUB}`} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

            <script src="static/vendor/jquery/jquery.min.js"></script>
            <script src="static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="static/vendor/owl.carousel2/owl.carousel.min.js"></script>
            <script src="static/vendor/modal-video/js/modal-video.js"></script>
            <script src="static/js/front.js"></script>
            <script dangerouslySetInnerHTML={this.injectSvgSprite()} />
          </>
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
