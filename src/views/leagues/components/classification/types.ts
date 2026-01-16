interface Classification {
  teamFebId: string
  name: string
  prettyName: string
  games: number
  wins: number
  losses: number
  points: number
  pointsAgainst: number
}

export interface Classifications {
  total: Classification[]
  local: Classification[]
  away: Classification[]
}
