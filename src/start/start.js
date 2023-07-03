const { connect } = require("mongoose");
const config = require("../../config/config");

const run = async (app) => {
  await connect(config.ConnectionString);

  app.all("/*", async (req, res) => {
    return res.status(404).json({ message: "Route not found!" });
  });

  const PORT = config.PORT;

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

module.exports = run;
