import { createRouter, createWebHistory } from 'vue-router'
import { LAYOUTS } from '@/layouts/types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView,
      redirect: 'leagues',
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/teams/TeamsView.vue'),
    },
    {
      path: '/team/:id',
      name: 'team',
      component: () => import('../views/team/TeamView.vue'),
      redirect: { name: 'teamStats' },
      children: [
        {
          path: 'stats',
          name: 'teamStats',
          component: () => import('../views/team/components/stats/TeamStats.vue'),
        },
        {
          path: 'scores',
          name: 'teamScores',
          component: () => import('../views/team/components/scores/TeamScores.vue'),
        },
        {
          path: 'points',
          name: 'teamPoints',
          component: () => import('../views/team/components/points/TeamPoints.vue'),
        },
        {
          path: 'players',
          name: 'teamPlayerStats',
          component: () => import('../views/team/components/players/TeamPlayers.vue'),
        },
        {
          path: 'rankings',
          name: 'teamRankings',
          component: () => import('../views/team/components/rankings/TeamRankings.vue'),
        },
      ],
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/reports/ReportsView.vue'),
      meta: {
        layout: LAYOUTS.EMPTY,
      },
    },
    // {
    //   path: '/leagues',
    //   name: 'leagues',
    //   component: () => import('../views/leagues/LeaguesView.vue'),
    // },
    {
      path: '/leagues',
      name: 'leagues',
      component: () => import('../views/leagues/LeaguesView.vue'),
      redirect: { name: 'leagueClassification' },
      children: [
        {
          path: 'classification',
          name: 'leagueClassification',
          component: () =>
            import('../views/leagues/components/classification/ClassificationView.vue'),
        },
        {
          path: 'ranking-players',
          name: 'leagueRankingPlayers',
          component: () => import('../views/leagues/components/players/RankingPlayers.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      redirect: { name: 'leagues' },
    },
  ],
})

export default router
