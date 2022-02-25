import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import RangeInput from "../components/RangeInput";
import {
  Container,
  Background,
  TitleContainer,
  Title,
  DrawButton,
  DrawCard,
  FifaButton,
  FifaRow,
  Options,
} from "../styles/home";

const Home: NextPage = () => {
  const [fifaVersion, setFifaVersion] = useState("22");
  const [maxOverall, setMaxOverall] = useState(100);
  const [minOverall, setMinOverall] = useState(0);
  const [offset, setOffset] = useState(3);

  return (
    <Background>
      <Head>
        <title>Sorteio de times FIFA</title>
        <meta
          name="description"
          content="Configure suas preferências para realizar o sorteio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <TitleContainer>
          <Title>Sorteador de Times</Title>
        </TitleContainer>

        <Options>
          <FifaRow>
            <FifaButton onClick={() => setFifaVersion("22")}>
              FIFA 22
            </FifaButton>
            <FifaButton onClick={() => setFifaVersion("21")}>
              FIFA 21
            </FifaButton>
            <FifaButton onClick={() => setFifaVersion("20")}>
              FIFA 20
            </FifaButton>
          </FifaRow>

          <RangeInput
            label="Pontuação geral máxima"
            onUpdate={setMaxOverall}
            maxValue={100}
            minValue={minOverall + 1}
            value={maxOverall}
          />
          <RangeInput
            label="Pontuação geral mínima"
            onUpdate={setMinOverall}
            maxValue={maxOverall - 1}
            minValue={0}
            value={minOverall}
          />
          <RangeInput
            label="Diferença máxima de pontuação"
            onUpdate={setOffset}
            maxValue={20}
            minValue={1}
            value={offset}
          />
        </Options>

        <DrawCard>
          <Image width={50} height={55} src={logo} alt="Sorteio FIFA" />

          <DrawButton>Sortear</DrawButton>
        </DrawCard>
      </Container>
    </Background>
  );
};

export default Home;
