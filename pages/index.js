import Head from 'next/head'
import Albums from '../components/Albums'
import Link from 'next/link'

export default function Home({ albums }) {
  return (
    <div>
      <legend className="hp__legend block box">
        <h2 className="wordart blues tac">ישר ממכבש הלהיטים:</h2>
        <h1 className="wordart rainbow tac">אספנו עבורכם את כל מה שצריך לדעת על היטמן, אוסף הלהיטים משנות ה-90'</h1>
      </legend>
      <div className="tac random-btn">
        <button>
          <Link href="/song">
          <a>קבל שיר רנדומלי</a>
          </Link>
          </button>
      </div>
      <Albums albums={albums} />
    </div>
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
    revalidate: 1000
  }
}

