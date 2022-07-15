import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';
import { Navigate } from 'solid-app-router';

import Home from './pages/home';
import AboutData from './pages/about.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contest-list',
    component: lazy(() => import('./pages/contest-list')),
  },
  {
    path: '/contest-detail',
    component: lazy(() => import('./pages/contest-detail')),
    children: [
      {
        path: '/',
        component: () => <Navigate href="/contest-detail/overview" />,
      },
      {
        path: '/overview',
        component: lazy(() => import('./pages/contest-detail/overview')),
      },
      {
        path: '/problem',
        component: lazy(() => import('./pages/contest-detail/problem')),
      },
      {
        path: '/status',
        component: lazy(() => import('./pages/contest-detail/status')),
      },
      {
        path: '/rank',
        component: lazy(() => import('./pages/contest-detail/rank')),
      },
    ],
  },
  {
    path: '**',
    component: lazy(() => import('./pages/errors/404')),
  },
];
