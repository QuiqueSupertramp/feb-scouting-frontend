export interface Team {
  febId: string
  name: string
  prettyName: string
  leagueId: number
}

export interface TeamView {
  febId: string
  name: string
  prettyName: string
  leagueId: number
  teamStats: GameTeamStats
  scores: Score[]
  playerStats: PlayerStatsView[]
  points: PointsStats
}

export interface Score {
  gameFebId: string
  round: number
  date: string
  time: string
  localTeamFebId: string
  localName: string
  localPrettyName: string
  localScore: number
  localQuarters: number[]
  awayTeamFebId: string
  awayName: string
  awayPrettyName: string
  awayScore: number
  awayQuarters: number[]
}

export interface GameTeamStats {
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

export interface GamePlayerStats {
  playerFebId: string
  gameFebId: string
  teamFebId: string
  name: string
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

export interface PlayerStatsView {
  teamFebId: string
  playerFebId: string
  name: string
  games: string[]
  stats: Omit<GamePlayerStats, 'teamFebId' | 'playerFebId' | 'name' | 'gameFebId'>
}

export interface ShotStats {
  made: number
  attempted: number
  percentage: number
}

export interface TeamStatsView {
  teamFebId: string
  name: string
  prettyName: string
  leagueId: number
  games: string[]
  stats: GameTeamStats
}

export type Quarters = [number, number, number, number]

export interface Points {
  points: number
  pointsAgainst: number
  quarters: Quarters
  quartersAgainst: Quarters
}

export interface PointsStats {
  total: Points
  local: Points
  away: Points
}
