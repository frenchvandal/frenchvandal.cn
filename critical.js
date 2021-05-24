const critical = require("critical");

critical.generate(
  {
    base: `${process.cwd()}/public/`,
    css: [
      `${process.cwd()}/public/css/base.min.a9d54e92b230529e39493dd2cee5ff238fe74bb3a009528b9558211b6f8042c3aae2408ecbdadb0a3a5ca7bd6f776108100c76540bc79d9a9cecbc4209c8d0c4.css`,
    ],
    src: "index.html",
    target: "index.html",
    inline: true,
    dimensions: [
      {
        height: 500,
        width: 300,
      },
      {
        height: 720,
        width: 1280,
      },
    ],
  },
  (err, output) => {
    if (err) {
      console.error(err);
    } else if (output) {
      console.log(`Generated critical CSS for ${process.cwd()}/public/`);
    }
  }
);
