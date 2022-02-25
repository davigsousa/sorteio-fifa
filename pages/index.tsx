import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import RangeInput from "../components/RangeInput";
import logo from "../public/logo.png";
import {
  Container,
  Background,
  TitleContainer,
  Title,
  DrawLabel,
  DrawCard,
  FifaButton,
  FifaRow,
  Options,
  NationalTeamsWrapper,
  NTLabel,
  SelectInput,
} from "../styles/home";

const FIFA_VERSION = "22";
const MAX_OVERALL = 100;
const MIN_OVERALL = 0;
const DEFAULT_MIN_OVERALL = 80;
const DEFAULT_OFFSET = 3;

const Home: NextPage = () => {
  const [fifaVersion, setFifaVersion] = useState(FIFA_VERSION);
  const [maxOverall, setMaxOverall] = useState(MAX_OVERALL);
  const [minOverall, setMinOverall] = useState(DEFAULT_MIN_OVERALL);
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [selectNationalTeam, setSelectNationalTeam] = useState(false);

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
          <Image width={25} height={27} src={logo} alt="Sorteio FIFA" />

          <Title>Sorteador de Times</Title>
        </TitleContainer>

        <Options>
          <FifaRow>
            <FifaButton
              isNotSelected={fifaVersion !== "22"}
              onClick={() => setFifaVersion("22")}
            >
              FIFA 22
            </FifaButton>
            <FifaButton
              isNotSelected={fifaVersion !== "21"}
              onClick={() => setFifaVersion("21")}
            >
              FIFA 21
            </FifaButton>
            <FifaButton
              isNotSelected={fifaVersion !== "20"}
              onClick={() => setFifaVersion("20")}
            >
              FIFA 20
            </FifaButton>
          </FifaRow>

          <RangeInput
            label="Pontuação geral máxima"
            onUpdate={setMaxOverall}
            maxValue={MAX_OVERALL}
            minValue={minOverall + 1}
            value={maxOverall}
          />
          <RangeInput
            label="Pontuação geral mínima"
            onUpdate={setMinOverall}
            maxValue={maxOverall - 1}
            minValue={MIN_OVERALL}
            value={minOverall}
          />
          <RangeInput
            label="Diferença máxima de pontuação"
            onUpdate={setOffset}
            maxValue={20}
            minValue={1}
            value={offset}
          />

          <NationalTeamsWrapper>
            <NTLabel>Incluir seleções?</NTLabel>
            <SelectInput
              type="checkbox"
              onClick={() => setSelectNationalTeam(!selectNationalTeam)}
            />
          </NationalTeamsWrapper>
        </Options>
      </Container>

      <DrawCard>
        <DrawLabel>Realizar sorteio</DrawLabel>
      </DrawCard>
    </Background>
  );
};

export default Home;
