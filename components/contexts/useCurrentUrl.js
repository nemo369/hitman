import { useState, useEffect } from 'react';

function getCurrentUrl() {
    if (!process.browser) {
        return ``
    }
    return document.URL;
}

export default function useCurrentUrl() {
    const [url, setUrl] = useState(getCurrentUrl());

    useEffect(() => {
        setUrl(getCurrentUrl())
    }, []);

    return url;
}