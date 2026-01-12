import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
          path: 'players',
          name: 'playerStats',
          component: () => import('../views/team/components/players/TeamPlayers.vue'),
        },
      ],
    },
  ],
})

export default router
