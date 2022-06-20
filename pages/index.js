import Head from 'next/head'
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
        <h1 className={styles.title}>
          Mi personal blog
        </h1>
      </main>
    </div>
  )
}
