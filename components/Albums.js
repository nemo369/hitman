import Link from 'next/link'

const Album = ({album}) => (
    <li>
        <Link href="/volume/[albumId]" as={`/volume/${album.albumNumber}`}>
            <a>{album.title}</a>
        </Link>
    </li>
)

const Albums = ({albums}) => {
    return ( 
        <section className="albums">
            <ul>
                {albums && albums.map(album =><Album  key={album.id} album={album} />)}
            </ul>
        </section>
     );
}
 
export default Albums;