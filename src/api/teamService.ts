import type { GameTeamStats, GameTeamStatsList, Team, TeamView } from '@/types/teams'
import { fetcher } from './fetcher'
import { API_URLS } from './url'

export class TeamService {
  static getTeams = async () => await fetcher<Team[]>(`${API_URLS.teams}`)
  static getTeam = async (teamFebId: string) =>
    await fetcher<TeamView>(`${API_URLS.teams}/${teamFebId}`)

  static getLeagueStats = async () => await fetcher<GameTeamStats>(`${API_URLS.teamStats}`)
  static getTeamStats = async (teamFebId: string) =>
    await fetcher<GameTeamStatsList>(`${API_URLS.teamStats}/${teamFebId}`)
}
