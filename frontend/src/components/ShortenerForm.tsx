import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import '../styles/shortenerForm.css';
import { API_URL } from '../config';

interface UrlForm {
    initialURL: string
}

const ShortenerForm: React.FC = () => {
    const [url, setUrl] = useState<UrlForm>({initialURL: ''});
    const [shortUrl, setShortUrl] = useState<string>('');

    const handleReload = () => {
        window.location.reload();
    }

    const sendURL = async () => {        
        try {
            const response: AxiosResponse = await axios.post(API_URL, url);

            setShortUrl(API_URL + response.data.shortUrl);
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                console.error("Axios error: ", err.message);
                if(shortUrl.trim().length === 0) {
                    setShortUrl('Invalid URL');
                }
            } else {
                console.error("General error: ", err.message);
            }
        }
    }

    return (
        <div className="container">
            <i className="bx bx-link-alt"></i>
            <h1>Url Shortener</h1>
            <label htmlFor="originalUrl">Enter URL To Shorten: </label>
            <input type="text" id="originalUrl" placeholder="https://example.com" value={url.initialURL} onChange={event => setUrl({initialURL: event.target.value})}/>
            <div className="buttons">
                <button id="reload-btn" onClick={handleReload}>Reload</button>
                <button id="short-btn" onClick={sendURL}>Short It</button>
            </div>
            <label htmlFor="shortenedUrl">Shortened URL :</label>
            <textarea id="shortenedUrl" value={shortUrl} rows={3} readOnly></textarea>
        </div>
    )
}

export default ShortenerForm;