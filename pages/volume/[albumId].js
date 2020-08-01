import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const AlbumPage = ({album}) => {
    if(!album){
        return (
        <>
            <h1 className="tac"> אוי לא, אין אלבום כזה</h1> 
            <h2 className="tac"> 
            <Link href="/">
                <a>
            נוסטלגיה יכולה להיות מתעתעת
            ,<br /> אולי בעמוד הבית תמצא את האלבום שחיפשת
                </a>
                </Link>
            </h2> 
        </>
        )
    }
    return ( <article>
        {album.desc}
    </article> );
}
 
export default AlbumPage;

export async function  getServerSideProps(context) {
    const {albumId} = context.query;
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/albums?albumNumber=${albumId}`)
    const albumData = await res.json();
    const album = albumData.find(album => +album.albumNumber === +albumId)
    return {
        props: {
            album:album ? album : null
        },
    }
  }
  
  