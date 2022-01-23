const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const SriPlugin = require("webpack-subresource-integrity");
const { createSecureHeaders } = require("next-secure-headers");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        apiKey: "AIzaSyDIFlrAHUb_xrR4SadMIXkC2oTJ4gLi23I",
        authDomain: "technovanza-3e853.firebaseapp.com",
        databaseURL: "https://technovanza-3e853.firebaseio.com",
        projectId: "technovanza-3e853",
        storageBucket: "technovanza-3e853.appspot.com",
        messagingSenderId: "163729170268",
        appId: "1:163729170268:web:e60535731c1c2aebebeb99",
        measurementId: "G-6T8LTS2VJT",
        domain: "http://localhost:3000",
      },
      // async headers() {
      //   return [
      //     {
      //       source: "/(.*)",
      //       headers: createSecureHeaders({
      //         contentSecurityPolicy: {
      //           directives: {
      //             defaultSrc: ["'self'"],
      //             styleSrc: [
      //               "'self'",
      //               "'unsafe-inline'",
      //               "https://fonts.googleapis.com",
      //             ],
      //             imgSrc: [
      //               "'self'",
      //               "https://lh3.googleusercontent.com",
      //               "https://www.google.com/images/",
      //               "https://i.ytimg.com",
      //               "https://img.icons8.com",
      //             ],
      //             baseUri: "self",
      //             formAction: "self",
      //             frameAncestors: true,
      //             fontSrc: ["'self'", "https://fonts.gstatic.com"],
      //             scriptSrc: [
      //               "'self'",
      //               "https://cdn.rawgit.com",
      //               "https://www.googletagmanager.com",
      //               "https://www.youtube.com",
      //             ],
      //             connectSrc: [
      //               "'self'",
      //               "https://securetoken.googleapis.com",
      //               "https://firebase.googleapis.com",
      //               "https://www.googleapis.com",
      //               "https://firestore.googleapis.com/google.firestore.v1.Firestore/",
      //               "https://www.google-analytics.com/",
      //               "https://www.google-analytics.com/g/",
      //             ],
      //             scriptSrcElem: [
      //               "'self'",
      //               "https://cdn.rawgit.com",
      //               "https://www.googletagmanager.com",
      //               "https://www.youtube.com/iframe_api",
      //               "https://www.youtube.com",
      //               "https://www.youtube.com/s/",
      //               "http://www.googletagmanager.com/gtag/",
      //               "https://apis.google.com/js/",
      //               "https://apis.google.com",
      //             ],
      //             frameSrc: [
      //               "'self'",
      //               "https://www.youtube.com",
      //               "https://technovanza-2020.firebaseapp.com",
      //             ],
      //           },
      //         },
      //         frameGuard: "deny",
      //         noopen: "noopen",
      //         nosniff: "nosniff",
      //         xssProtection: "sanitize",
      //         forceHTTPSRedirect: [
      //           true,
      //           { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
      //         ],
      //         referrerPolicy: "same-origin",
      //       }),
      //     },
      //   ];
      // },
      // webpack(config) {
      //   config.output.crossOriginLoading = "anonymous";
      //   config.plugins.push(
      //     new SriPlugin({
      //       hashFuncNames: ["sha256", "sha384"],
      //       enabled: true,
      //     })
      //   );

      //   return config;
      // },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      apiKey: "AIzaSyDIFlrAHUb_xrR4SadMIXkC2oTJ4gLi23I",
      authDomain: "technovanza-3e853.firebaseapp.com",
      databaseURL: "https://technovanza-3e853.firebaseio.com",
      projectId: "technovanza-3e853",
      storageBucket: "technovanza-3e853.appspot.com",
      messagingSenderId: "163729170268",
      appId: "1:163729170268:web:e60535731c1c2aebebeb99",
      measurementId: "G-6T8LTS2VJT",
      domain: "https://technovanza.vercel.app/",
    },
  };
};
