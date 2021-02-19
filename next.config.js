const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const SriPlugin = require("webpack-subresource-integrity");
const { createSecureHeaders } = require("next-secure-headers");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        apiKey: "AIzaSyAm855leq4XR4nd-wwMcpgVGmSNDNqV134",
        authDomain: "technovanza-2020.firebaseapp.com",
        projectId: "technovanza-2020",
        storageBucket: "technovanza-2020.appspot.com",
        messagingSenderId: "911645212434",
        appId: "1:911645212434:web:c81de3a8db41bb2e4dfdcb",
        measurementId: "G-2JJGCYXZDR",
        domain: "http://localhost:3000",
      },
      async headers() {
        return [
          {
            source: "/(.*)",
            headers: createSecureHeaders({
              contentSecurityPolicy: {
                directives: {
                  defaultSrc: ["'self'"],
                  styleSrc: ["'self'", "'unsafe-inline'"],
                  imgSrc: ["'self'"],
                  baseUri: "self",
                  formAction: "self",
                  frameAncestors: true,
                },
              },
              frameGuard: "deny",
              noopen: "noopen",
              nosniff: "nosniff",
              xssProtection: "sanitize",
              forceHTTPSRedirect: [
                true,
                { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
              ],
              referrerPolicy: "same-origin",
            }),
          },
        ];
      },
      webpack(config) {
        config.output.crossOriginLoading = "anonymous";
        config.plugins.push(
          new SriPlugin({
            hashFuncNames: ["sha256", "sha384"],
            enabled: true,
          })
        );

        return config;
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      apiKey: "AIzaSyAm855leq4XR4nd-wwMcpgVGmSNDNqV134",
      authDomain: "technovanza-2020.firebaseapp.com",
      projectId: "technovanza-2020",
      storageBucket: "technovanza-2020.appspot.com",
      messagingSenderId: "911645212434",
      appId: "1:911645212434:web:c81de3a8db41bb2e4dfdcb",
      measurementId: "G-2JJGCYXZDR",
      domain: "https://technovanza.org",
    },
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: createSecureHeaders({
            contentSecurityPolicy: {
              directives: {
                defaultSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'"],
                baseUri: "self",
                formAction: "self",
                frameAncestors: true,
              },
            },
            frameGuard: "deny",
            noopen: "noopen",
            nosniff: "nosniff",
            xssProtection: "sanitize",
            forceHTTPSRedirect: [
              true,
              { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
            ],
            referrerPolicy: "same-origin",
          }),
        },
      ];
    },
    webpack(config) {
      config.output.crossOriginLoading = "anonymous";
      config.plugins.push(
        new SriPlugin({
          hashFuncNames: ["sha256", "sha384"],
          enabled: true,
        })
      );

      return config;
    },
  };
};
