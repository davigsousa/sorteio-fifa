import Image from "next/image";
import type { Team } from "../../entities";
import { Container, InfoRow, Details, OverallRow, Overall } from "./styles";

interface TeamDetailsProps {
  team: Team;
}

function TeamDetails({ team }: TeamDetailsProps) {
  return (
    <Container>
      <InfoRow>
        <Image width={80} height={80} src={team.image} alt={team.name} />

        <Details>
          <h1>{team.name}</h1>
          <p>Liga: {team.league}</p>
        </Details>
      </InfoRow>

      <OverallRow>
        <Overall>Pontuação Geral: {team.overall}</Overall>
      </OverallRow>
    </Container>
  );
}

export default TeamDetails;
