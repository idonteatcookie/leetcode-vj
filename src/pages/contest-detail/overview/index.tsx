import { Link } from 'solid-app-router'
import { Component, createSignal, For } from 'solid-js'
import './index.scss'

const ContestDetailOverview: Component = () => {
  const [problems] = createSignal([
    {
      name: '装满杯子需要的最短总时长'
    },
    {
      name: '无限集中的最小数字'
    },
    {
      name: '移动片段得到字符串'
    },
    {
      name: '统计理想数组的数目'
    }
  ])

  return (
    <div class="contest-detail-overview">
      <h2 class="title">题目列表</h2>
      <ul class="problem-list">
        <For each={problems()}>
          {(problem) => (
            <li class="problem-item">
              <Link href="/contest-detail/problem">{problem.name}</Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

export default ContestDetailOverview
