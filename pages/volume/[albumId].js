import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import NoAlbum from '../../components/single/NoAlbum'
import SingleAlbum from '../../components/single/SingleAlbum'
import {NextSeo} from 'next-seo'
import { seoMerge } from '../../next-seo.config'

const AlbumPage = ({ album }) => {
  if (!album) {
    return <NoAlbum />
  }

  const seo = seoMerge({
    title:album.title,
    description:`${album.year} אלבום מספר ${album.albumNumber} משנת `
  });
  return (
    <>
      <NextSeo {...seo} />
      <SingleAlbum album={album} />
    </>
  );
}

export default AlbumPage;

export async function getStaticProps(context) {
  const { albumId } = context.params;
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/albums?albumNumber=${albumId}`)
  const albumData = await res.json();
  const album = albumData.find(album => +album.albumNumber === +albumId)
  return {
    props: {
      album: album ? album : null
    },
  }
}



export async function getStaticPaths() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/albums`)
  const albums = await res.json();

  const paths = albums?.map((album) => ({
    params: { albumId: `${album.albumNumber}` },
  }))

  return {
    paths,
    fallback: true
  };
}