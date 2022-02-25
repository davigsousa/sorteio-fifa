import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../styles/home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sorteio de times FIFA</title>
        <meta
          name="description"
          content="Configure suas preferências para realizar o sorteio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Bem vindo ao sorteio</h1>
      </Container>
    </div>
  );
};

export default Home;
