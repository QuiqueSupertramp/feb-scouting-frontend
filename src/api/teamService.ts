import type { GameTeamStats, GameTeamStatsList, Team, TeamView } from '@/types/teams'
import { fetcher } from './fetcher'

export class TeamService {
  static getTeams = async () => await fetcher<Team[]>('/teams')
  static getTeam = async (teamFebId: string) => await fetcher<TeamView>(`/teams/${teamFebId}`)

  static getLeagueStats = async () => await fetcher<GameTeamStats>(`/team-stats`)
  static getTeamStats = async (teamFebId: string) =>
    await fetcher<GameTeamStatsList>(`/team-stats/${teamFebId}`)
}
