import Header from '../components/header'
import Head from 'next/head';
import About from '../components/about';
import Experience from '../components/experience';
import Projects2 from '../components/projects2';
import Contact from '../components/contact';


export default function Home() {
  return (
    <div className="app">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Header />
      <About />
      <Experience />
      <Projects2 />
      <Contact />
      {/* <Picture />
      <Projects /> */}
    </div>
  )
}
