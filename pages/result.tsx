import type {
  NextPage,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from "next";
import Head from "next/head";
import TeamDetails from "../components/TeamDetails";
import ImagesController from "../controllers/ImagesController";
import TeamsController from "../controllers/TeamsController";
import { Team } from "../entities";

interface ResultProps {
  firstTeam: Team;
  secondTeam: Team;
}

const Result: NextPage<ResultProps> = ({ firstTeam, secondTeam }) => {
  return (
    <div>
      <Head>
        <title>Resultado do sorteio FIFA</title>
        <meta
          name="description"
          content="Veja o resultado do sorteio realizado"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Resultado do sorteio</h1>

        <section>
          <TeamDetails team={firstTeam} />
          <TeamDetails team={secondTeam} />
        </section>
      </div>
    </div>
  );
};

interface PageQuery {
  fifaVersion?: string;
  maxOverall?: string;
  minOverall?: string;
  offset?: string;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ResultProps>> {
  const pageQuery = context.query as PageQuery;

  const fifaVersion = pageQuery.fifaVersion || "22";
  const maxOverall = pageQuery.maxOverall ? Number(pageQuery.maxOverall) : 100;
  const minOverall = pageQuery.minOverall ? Number(pageQuery.minOverall) : 80;

  const teamsController = new TeamsController(fifaVersion);
  const randomTeam = await teamsController.getRandomTeam(
    maxOverall,
    minOverall
  );
  const similarTeam = await teamsController.getSimilarTeam(randomTeam, 3);

  const imagesController = new ImagesController(fifaVersion);
  const firstTeamImage = await imagesController.getImage(randomTeam.id);
  const secondTeamImage = await imagesController.getImage(similarTeam.id);

  return {
    props: {
      firstTeam: {
        name: randomTeam.name,
        image: firstTeamImage,
        league: randomTeam.league,
        overall: randomTeam.overall,
      },
      secondTeam: {
        name: similarTeam.name,
        image: secondTeamImage,
        league: similarTeam.league,
        overall: similarTeam.overall,
      },
    },
  };
}

export default Result;
