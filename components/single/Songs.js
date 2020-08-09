import { secToDisplay } from "../../utils/time";

const Songs = ({ songs }) => {
    if (!songs) {
        return ''
    }
    return (
        <section className="songs box">
            <h3 className="tac wordart blues flex center">
                <span>רשימת השירים</span>
            </h3>
            {songs.map((song) => (
                <div key={song.id} className="song-box flex">
                    <div className="track-number">{song.trackNumber}</div>
                    <h5><b>{song.by} </b>- {song.title}</h5>
                    <h5 className="impact">{secToDisplay(song.duration)}</h5>
                    <div className="song-box__links flex nowrap">
                        {song.links && Object.entries(song.links).map(([key, value]) => (
                            <a key={key} href={value} target="_blank" rel="noopener">
                                <img src={`/${key}.svg`} />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Songs;

