const critical = require("critical");

critical.generate(
  {
    base: `${process.cwd()}/public/`,
    css: [
      `${process.cwd()}/public/css/base.min.d34db1546050ff69f503cf2518439fcf67b079db9e982f7ddaa98992bbfe0ec1.css`,
    ],
    src: "index.html",
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
