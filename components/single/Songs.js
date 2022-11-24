import { secToDisplay } from "../../utils/utils";
import { useState } from "react";
import { SongBox } from "../../pages/song";

const Songs = ({ songs }) => {
    const [currentSong, setCurrentSong] =  useState(null);
    if (!songs) {
        return ''
    }

    const openPopUp = (song)=>{
        setCurrentSong(song)
    }
    return (
        <section className="songs box">
            <h3 className="tac wordart blues flex center">
                <span>רשימת השירים</span>
            </h3>
            {songs.map((song) => (
                <button key={song.id} className="song-box flex col-1-1" onClick={()=>openPopUp(song)}>
                    <div className="track-number">{song.trackNumber} </div>
                    <h2><b>{song.by} </b>- {song.title}</h2>
                    <h3 className="impact">{secToDisplay(song.duration)}</h3>
                    <div className="song-box__links flex nowrap">
                        {song.links && Object.entries(song.links).map(([key, value]) => (
                            <a key={key} href={value} target="_blank" rel="noopener"  onClick={(e)=>e.stopPropagation()}>
                                <img src={`/${key}.svg`} />
                            </a>
                        ))}
                    </div>
                </button>
            ))}
    {currentSong &&
        <div className="modal">
        <div className="modal__bg" onClick={()=>setCurrentSong(null)}>
            <button>X</button>
        </div>
        <div className="modal__content">
            <SongBox song={currentSong}/>
        </div>


        </div>
}
        </section>
    );
}

export default Songs;

