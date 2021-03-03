import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Titulo maneiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olazes, tudo bom!?
        </h1>
      </main>

      <footer className={styles.footer}>
        Aqui tem um footer maneiro
      </footer>
    </div>
  )
}
