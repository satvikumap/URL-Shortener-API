const URL = require("../model/url");

async function getStatistics(req, res) {
    const shortId = req.params.shortId;

    try {
        const result = await URL.findOne({ shortId });

        if (!result) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        return res.json({
            "clicks": result.clicks,
            "Timestamp": result.lastAccessed,
        });
    } catch (e) {

        console.error("Error fetching statistics:", e.message);
        return res.status(500).json({
            message: "An error occurred while fetching the statistics",
            error: e.message,
        });
    }
}

module.exports = {
    getStatistics,
};
