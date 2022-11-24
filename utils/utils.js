export const secToDisplay = (duration) => {
    // Hours, minutes and seconds
    // const hrs = Math.floor(duration / 3600);
    const mins = Math.floor((duration % 3600) / 60);
    const secs = Math.floor(duration % 60);

    // Output like '1:01' or '4:03:59' or '123:03:59'
    const ret = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;


    return ret
}

export const fetcher = (url) => fetch(url).then((res) => res.json());
