const express = require("express");
const port = process.env.PORT;
const weatherRoutes = require("./routes/weather");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.static("client"));

app.use("/api/weather", weatherRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
