module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "testProof",
  
  ],
  rpc: {
    host: "127.0.0.1",
    port: 8545
  }
};
