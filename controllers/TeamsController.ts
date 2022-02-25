import { TeamJSON } from "../entities";
import { loadJSON, serverPath } from "./utils/file";

class TeamsController {
  fifaVersion: string;
  shouldSelectNationalTeams: boolean;
  teams: TeamJSON[] = [];

  constructor(fifaVersion: string, shouldSelectNationalTeams = false) {
    this.fifaVersion = fifaVersion;
    this.shouldSelectNationalTeams = shouldSelectNationalTeams;
    this.teams = this.loadTeams();
  }

  loadTeams() {
    const filename = serverPath(`./data/teams_${this.fifaVersion}.json`);
    return loadJSON(filename.toString());
  }

  async getRandomTeam(maxOverall = 100, minOverall = 80) {
    const teams = this.teams.filter((team, index) => {
      if (!this.shouldSelectNationalTeams && team.is_national_team)
        return false;

      team.id = index;
      return team.overall <= maxOverall && team.overall >= minOverall;
    });

    const index = Math.floor(Math.random() * teams.length);
    return teams[index];
  }

  async getSimilarTeam(previousTeam: TeamJSON, offset = 3) {
    const maxOverall = Math.min(100, previousTeam.overall + offset);
    const minOverall = Math.max(0, previousTeam.overall - offset);

    const isValid = (team: TeamJSON, index: number) =>
      index !== previousTeam.id &&
      team.overall <= maxOverall &&
      team.overall >= minOverall;

    const teams = this.teams.filter((team, index) => {
      if (!this.shouldSelectNationalTeams && team.is_national_team)
        return false;

      team.id = index;
      return isValid(team, index);
    });

    const index = Math.floor(Math.random() * teams.length);
    return teams[index];
  }
}

export default TeamsController;
