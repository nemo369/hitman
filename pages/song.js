import { useEffect, useState } from "react";
import Player from "../components/rndSong/Player"
import Loader from "../components/rndSong/Loader";
import { seoMerge } from '../next-seo.config'
import { NextSeo } from "next-seo";

const RandomSong = ({ allSongs }) => {
    const [songs, setSongs] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        addSong();
    }, []);
    const getRandomSong = () => {
        console.log(allSongs);
        if (!allSongs.length) {
            return
        }
        const randomIndex = Math.floor(Math.random() * allSongs.length);
        const newSong = allSongs[randomIndex];
        allSongs.splice(randomIndex, 1);
        return newSong;
    };

    const addSong = () => {
        const newSong = getRandomSong();
        setLoader(true)
        if (newSong) {
            setSongs([...songs, newSong])
            setTimeout(() => {
                setLoader(false)
            }, Math.floor(Math.random() * (3000 - 300) + 300));
        }
    }

    const seo = seoMerge({
        title: `שיר אקראי מכל אחד מאוספי הלהיטים של היטמן`,
    });
    return (
        <>
            <NextSeo {...seo} />
            <section className="box rnd-song relative">
                {loader && <Loader />}
                {songs.length && songs[songs.length - 1] && <SongBox song={songs[songs.length - 1]} nextSong={addSong} />}
            </section>
        </>
    );
}


const SongBox = ({ song, nextSong }) => {
    const urlId = song.links?.youtube.split('watch?v=')[1]
    const src = `https://www.youtube.com/embed/${urlId}`
    return (
        <div className="relative ofh">
            <Player src={src} />
            <div className="tac rnd-song__btn">
                <button onClick={nextSong}>צרבתי כבר את השיר הזה, אפשר שיר אחר?</button>
            </div>
            <h2 className="tac">
                <span>{song.by}</span>
                <span> - </span>
                <span>{song.title}</span>
            </h2>
            <h3 className="tac">
                <span>שיר מספר {song.trackNumber} מתוך: </span>
                <span>היטמן - {song.album.albumNumber}</span>
                {/* <span className="year">ב: {song.album.year}</span> */}
            </h3>
        </div>
    );
}

export default RandomSong;

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/songs`)
    const allSongs = await res.json()

    return {
        props: {
            allSongs,
        },
    }
}

