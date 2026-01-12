export interface Team {
  febId: string
  name: string
  prettyName: string
  leagueId: number
}

export interface TeamView {
  teamFebId: string
  name: string
  pretty_name: string
  league_id: number
  games: string[]
  stats: TeamStats
}

export interface TeamStats {
  minutes: number
  points: number
  twoPoints: ShotStats
  threePoints: ShotStats
  fieldGoals: ShotStats
  freeThrows: ShotStats
  offensiveRebounds: number
  defensiveRebounds: number
  totalRebounds: number
  assists: number
  steals: number
  turnovers: number
  foulsCommitted: number
  foulsDrawn: number
  pir: number
}

export interface ShotStats {
  made: number
  attempted: number
  percentage?: number
}
