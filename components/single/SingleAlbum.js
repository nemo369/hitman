import Songs from "./Songs";
import YouTube from "../svg/YouTube";
import Spotify from "../svg/Spotify";
import Player from "./Player";
import Showdown from "showdown";

const SingleAlbum = ({ album }) => {
    const converter = new Showdown.Converter();
    const html = converter.makeHtml(album.description);
    const spotifyUid = album.spotifyPlaylist ? album.spotifyPlaylist.replace(`.com/`, `.com/embed/`) : '';
    const player = album.youTubePlaylist ? `https://www.youtube.com/embed/videoseries?list=${album.youTubePlaylist}` : spotifyUid;
    return (
        <section className="cd">
            <header className="cd__header flex nowrap box">
                <div className="cd__data half">
                    <h1 className="cd__title">{album.title}</h1>
                    <h3>היטמן - {album.albumNumber}</h3>
                    <h3 className="year">שנה: {album.year}</h3>
                    <div className="flex cd__playlist center">
                        <a href={`https://www.youtube.com/playlist?list=${album.youTubePlaylist}`} target="_blank" rel="noopener">
                            <YouTube />
                        </a>
                        <a href={album.spotifyPlaylist} target="_blank" rel="noopener">
                            <Spotify />
                        </a>
                    </div>
                </div>
                <div className="project-box__inner">
                    <div className="project-box__image">
                        {album.thumbnail && <img className="album__thumb" src={album.thumbnail.url} alt={album.thumbnail.alternativeText} />}
                        <img className="project-box__image__vinyl" src="/compact_disc.svg" />
                    </div>
                </div>
            </header>
            {(album.youTubePlaylist || spotifyUid) && <Player src={player} />}
            <Songs songs={album.songs} />
            <article className="cd__article" dangerouslySetInnerHTML={{ __html: html }} />

        </section>
    );
}

export default SingleAlbum;