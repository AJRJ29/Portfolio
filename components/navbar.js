import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar() {
  useEffect(() => {
    document.getElementById("home").style.color = 'hotpink'
  }, [])

  return (
    <div>
      <Head>
        <title>Josh's Portfolio</title>
      </Head>
      <navbar>
        <ul>
          <li>
            <Link href="/">
              <a id="home">Home</a>
            </Link>
          </li>
        </ul>
      </navbar>
    </div>
  )
}