import Link from 'next/link';
import { useState ,useEffect } from 'react'

const Album = ({ album, index }) => {
    const thumbnail = album.thumbnail?.formats.thumbnail.url;


    return (
        <li className={`album album--${index} window`}>
            <div className="title-bar">
                <div className="title-bar-text">{album.title}</div>
                <div className="title-bar-controls">
                    <Link href="/volume/[albumId]" as={`/volume/${album.albumNumber}`}>
                        <a>
                            <button aria-label="Help"></button>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="window-body album__body">
                <div className="album__year">{album.year}</div>
                <Link href="/volume/[albumId]" as={`/volume/${album.albumNumber}`}>
                    <a>
                        <img className="album__thumb" src={thumbnail} alt={album.thumbnail?.alternativeText} />
                    </a>
                </Link>
                <Link href="/volume/[albumId]" as={`/volume/${album.albumNumber}`}>
                    <a className="album__details">
                        <div style={{fontSize:'22px'}}>היטמן - {album.albumNumber}</div>
                        <div className="album__songs">{album.songs.map((song, i) => (<span key={song.id}>{i ? ',' : ''} {song.by}</span>))}</div>
                    </a>
                </Link>
            </div>

        </li>
    )
}

const Albums = ({ albums }) => {
    useEffect(() => {
            if(process.browser){
                setisGrid(!!(window.innerWidth < 960));
            }
    }, [])
   
    const [isGrid, setisGrid] = useState(false)
    return (
        <section className="albums">
            <div
                className={`view-mode--toggle--list-grid ${isGrid ? 'view-mode--toggle--icon-grid' : 'view-mode--toggle--icon'}`}
                onClick={() => setisGrid(!isGrid)}>
                <div className="view-mode--toggle--icon">
                    <div className="view-mode--toggle--icon-bar"></div>
                    <div className="view-mode--toggle--icon-bar"></div>
                    <div className="view-mode--toggle--icon-bar"></div>
                </div>
            </div>
            <ul className={`albums__ul albums--${isGrid ? 'grid' : 'list'}`}>
                {albums && albums.map((album, i) => <Album key={album.id} album={album} index={i} />)}
            </ul>
        </section>
    );
}

export default Albums;