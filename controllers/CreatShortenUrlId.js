const { v4: uuidv4 } = require("uuid");
const URL = require("../model/url")


async function genratedShortenID(req,res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error : 'url is required'})
    }
    const shortId = uuidv4().slice(0, 8)

    try {
        await URL.create({
            originalUrl: body.url,
            shortId: shortId,
            lastAccessed: new Date().toISOString()
        });

        return res.status(201).json({
            message: "URL shortened successfully",
            shortId: shortId
        });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while shortening the URL', details: error.message });
    }

    
}



module.exports = {
    genratedShortenID,
};