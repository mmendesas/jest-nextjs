import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import dynamic from 'next/dynamic';

import { usePublisher } from '../publisher';
// import styles from '../../styles/Home.module.css'
import Counter from '../components/Counter'
import Button from '../components/Button';
import Console from '../components/Console';

const styles = {};

const DynamicComponent = dynamic(
  () => import('../components/Dynamic'),
  { loading: () => <p>loading ...</p> }
)

const Container = styled.div`
  width: 350px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Home() {
  const { publish } = usePublisher();
  const [show, setShow] = useState(false);

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

        <Counter />
        <Container>
          <Button onClick={() => { publish('message', '[click] - clique aqui tbm') }}>
            Clique aqui tbm
          </Button>
          {!show ? (
            <Button id="dynamicBtn" secondary onClick={() => {
              publish('message', '[click] - show dynamic');
              setShow(true);
            }}>
              Mostra o dynamic
            </Button>
          ) :
            (<DynamicComponent />)
          }
        </Container>
        <Console />
      </main>

      <footer className={styles.footer}>
        Aqui tem um footer maneiro
      </footer>
    </div>
  )
}

export default Home;