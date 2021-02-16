const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/utils/sitemap.js");
    }
    return config;
  },
};

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
  };
};
