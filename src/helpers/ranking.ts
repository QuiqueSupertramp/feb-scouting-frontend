import type { PlayerStatsView } from '@/types/teams'

export const sortPlayers = (players: PlayerStatsView[]) => {
  const points = players
    .sort((a, b) => b.stats.points - a.stats.points)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.points,
    }))

  const rebounds = players
    .sort((a, b) => b.stats.totalRebounds - a.stats.totalRebounds)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.totalRebounds,
    }))
  const assists = players
    .sort((a, b) => b.stats.assists - a.stats.assists)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.assists,
    }))
  const pir = players
    .sort((a, b) => b.stats.pir - a.stats.pir)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.pir,
    }))
  const threePoints = players
    .sort((a, b) => (b.stats.threePoints.percentage ?? 0) - (a.stats.threePoints.percentage ?? 0))
    .filter((p) => p.stats.threePoints.attempted >= 1)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.threePoints.percentage + '%',
    }))
  const freeThrows = players
    .sort((a, b) => (b.stats.freeThrows.percentage ?? 0) - (a.stats.freeThrows.percentage ?? 0))
    .filter((p) => p.stats.freeThrows.attempted >= 1)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.freeThrows.percentage + '%',
    }))
  const steals = players
    .sort((a, b) => (b.stats.steals ?? 0) - (a.stats.steals ?? 0))
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.steals,
    }))
  const turnovers = players
    .sort((a, b) => (b.stats.turnovers ?? 0) - (a.stats.turnovers ?? 0))
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.turnovers,
    }))
  return { points, rebounds, assists, threePoints, pir, freeThrows, steals, turnovers }
}
