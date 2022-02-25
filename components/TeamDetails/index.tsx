import Image from "next/image";
import type { Team } from "../../entities";

interface TeamDetailsProps {
  team: Team;
}

function TeamDetails({ team }: TeamDetailsProps) {
  return (
    <div>
      <Image width={120} height={120} src={team.image} alt={team.name} />
      <h1>{team.name}</h1>
      <p>Liga: {team.league}</p>
      <p>Pontuação Geral: {team.overall}</p>
    </div>
  );
}

export default TeamDetails;
