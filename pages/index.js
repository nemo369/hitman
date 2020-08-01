import Head from 'next/head'
import Albums from '../components/Albums'

export default function Home({albums}) {
  return (
    <main className="container">
      <article className="tac">
        <h2 className="wordart blues">ישר ממכבש הלהיטים:</h2>
        <h1 className="wordart rainbow">ברוכים הבאים להיטמן</h1>
        <h2 className="wordart rainbow">אספנו עבורכם את כל מה שצריך לדעת על אוסף הלהיטים משנות ה90'</h2>
      </article>
      <Albums albums={albums}/>

    </main>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/albums`)
  const albums = await res.json()

  return {
    props: {
      albums,
    },
  }
}

