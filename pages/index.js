import Head from 'next/head'
import Albums from '../components/Albums'

export default function Home({albums}) {
  return (
    <div>
      <legend className="hp__legend block">
        <h2 className="wordart blues tac">ישר ממכבש הלהיטים:</h2>
        <h2 className="wordart rainbow tac">אספנו עבורכם את כל מה שצריך לדעת על אוסף הלהיטים משנות ה90'</h2>
      </legend>
      <Albums albums={albums}/>
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
  }
}

