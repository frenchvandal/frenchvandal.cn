const critical = require("critical");

critical.generate(
  {
    base: `${process.cwd()}/public/`,
    css: [
      `${process.cwd()}/public/css/base.min.3fb4c3be945da2c8d9a72ca35e718facbadf2aca3b3ca1daefb9641a808076cb.css`,
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
