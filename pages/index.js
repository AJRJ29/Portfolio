import Projects from '../components/Projects'
import Picture from '../components/Picture'
import Head from 'next/head';
import Badge from 'react-bootstrap/Badge';



export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Picture />
      <Projects />
    </div>
  )
}
