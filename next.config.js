const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

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
      },
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
    },
  };
};