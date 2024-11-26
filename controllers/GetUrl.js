const URL = require("../model/url");

async function getUrl(req, res) {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId }, 
            { 
                $inc: { clicks: 1 }, 
                lastAccessed: new Date().toISOString() 
            },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ error: "URL not found" });
        }

        res.redirect(entry.originalUrl);
    } catch (error) {
        console.error("Error fetching URL:", error);
        res.status(500).json({ error: "An error occurred while fetching the URL" });
    }
}

module.exports = {
    getUrl,
};
