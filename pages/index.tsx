import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Container } from "../styles/home";

const Home: NextPage = () => {
  const [fifaVersion, setFifaVersion] = useState("22");

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
        <section>
          <button onClick={() => setFifaVersion("22")}>FIFA 22</button>
          <button onClick={() => setFifaVersion("21")}>FIFA 21</button>
          <button onClick={() => setFifaVersion("20")}>FIFA 20</button>
        </section>

        <button>Sortear</button>
      </Container>
    </div>
  );
};

export default Home;
