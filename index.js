const express = require("express")
const connectDB = require("./config")
const shortUrl = require("./router/shortUrl_route");
const apiLimiter = require("./middleware/rateLimiter");


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(apiLimiter)

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use("/",shortUrl)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });