import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import NoAlbum from '../../components/single/NoAlbum'
import SingleAlbum from '../../components/single/SingleAlbum'
const AlbumPage = ({album}) => {
    if(!album){
        return <NoAlbum/>
    }
    return ( <SingleAlbum album={album}/> );
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
  
  