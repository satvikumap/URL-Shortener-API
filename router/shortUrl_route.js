const express = require("express")
const {genratedShortenID} = require("../controllers/CreatShortenUrlId");
const {getUrl} = require("../controllers/GetUrl")
const {getStatistics} = require("../controllers/GetstatisticsOfUrl")

const router = express.Router();

router.post('/shorten',genratedShortenID);
router.get('/:shortId',getUrl)
router.get('/stats/:shortId',getStatistics)


module.exports = router;