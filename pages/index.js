import Head from 'next/head'
import Rumah from './components/home/Home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GloryCell</title>
        <meta name="description" content="GloryCell Web App Happy Shopping" />
      </Head>

      <main>
        <Rumah />
      </main>

      <footer>

      </footer>
    </div>
  )
}
