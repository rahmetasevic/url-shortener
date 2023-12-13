const validateURL = require("../utils/urlValidation");
const URL = require('../models/URL');
const { nanoid } = require('nanoid');

const getShortURL = async (req, res) => {
    try {
        const url = await URL.findOne({shortUrl: req.params.urlId});

        if(url) {
            res.redirect(url.initialUrl);
        } else {
            res.status(404).json('No URL Found')
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err});
    }
};

const createShortURL = async (req, res) => {
    
    const { initialURL } = req.body;
    
    if(validateURL(initialURL)) {
        try {

            let url = await URL.findOne({initialUrl: initialURL});
            const shortUrl = nanoid(10);

            if(url) {
                return res.status(409).json({ message: 'There is already a shortened URL of this one!'});
            } else {
                const newURL = await URL.create({
                    initialUrl: initialURL,
                    shortUrl
                });
                
                res.status(201).json(newURL);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({message: err});
        }
    } else {
        res.status(400).json({message: "Invalid URL!"});
    }

};

module.exports = { getShortURL, createShortURL };