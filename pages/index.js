import Head from 'next/head'
import Hello from '../components/Hello'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal blog</title>
        <meta name='description' content='Description my personal blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Hello className={styles.title} />
      </main>
    </div>
  )
}
