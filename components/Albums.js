import Link from 'next/link'

const Album = ({album , index}) =>{ 
    const { API_URL } = process.env
    const thumbnail = album.thumbnail[0]?.formats.thumbnail.url;

    
    return(
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
            <img className="album__thumb" src={API_URL + thumbnail} alt={album.thumbnail[0].alternativeText}/>
            <Link href="/volume/[albumId]" as={`/volume/${album.albumNumber}`}>
                <a className="album__details">
                <div>היטמן - {album.albumNumber}</div>
                {album.songs.map ((song,i)=> (<div key={song.id}>{i? ',': ''} {song.by}</div>))}
                </a>
            </Link>
        </div>

    </li>
)}

const Albums = ({albums}) => {
    return ( 
        <section className="albums">
            <ul>
                {albums && albums.map((album ,i) =><Album  key={album.id} album={album} index={i} />)}
            </ul>
        </section>
     );
}
 
export default Albums;