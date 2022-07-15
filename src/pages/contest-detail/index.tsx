import { Component, Index } from 'solid-js'
import { Outlet, Link } from 'solid-app-router'
import { Header } from './components'

import './index.scss'

const routes = ['overview', 'problem', 'status', 'rank']

const ContestDetail: Component = () => {
  return (
    <div class="contest-detail">
      <Header />
      <div class="flex justify-between p-16px ">
        <Index each={routes}>
          {(route) => (
            <Link
              class="bg-green-500 flex-grow mx-10px px-10px py-4px text-center text-lg"
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
