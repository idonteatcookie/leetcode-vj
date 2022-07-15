import { Component, Index } from 'solid-js'
import { Outlet, Link, useLocation } from 'solid-app-router'
import { Header } from './components'

import './index.scss'

const routes = ['overview', 'problem', 'status', 'rank']

const ContestDetail: Component = () => {
  const localtion = useLocation()

  return (
    <div class="contest-detail">
      <Header />
      <div class="nav-box">
        <Index each={routes}>
          {(route) => (
            <Link
              class="nav-link"
              classList={{
                active: localtion.pathname === `/contest-detail/${route()}`
              }}
              href={`/contest-detail/${route()}`}
            >
              {route()}
            </Link>
          )}
        </Index>
      </div>
      <Outlet />
    </div>
  )
}

export default ContestDetail
