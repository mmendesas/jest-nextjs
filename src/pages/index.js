import { useState } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';

import Counter from '../components/Counter'
import Button from '../components/Button';
import Console from '../components/Console';
import { Container, Title, Main, ButtonContainer, Footer } from './index.styles'

import { usePublisher } from '../publisher';

const DynamicComponent = dynamic(
  () => import('../components/Dynamic'),
  { loading: () => <p>loading ...</p> }
)

function Home() {
  const { publish } = usePublisher();
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Head>
        <title>Titulo maneiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Olazes, tudo bom!?</Title>
        <Counter />
        <ButtonContainer>
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
        </ButtonContainer>
        <Console />
      </Main>

      <Footer>
        Aqui tem um footer maneiro
      </Footer>
    </Container>
  )
}

export default Home;