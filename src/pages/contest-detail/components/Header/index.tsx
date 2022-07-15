import { Component } from 'solid-js'
import './index.scss'

const Header: Component = () => {
  return (
    <div class="contest-detail-header">
      <div class="base-info-row">
        <div>Begin: 2022-07-12 16:16 CST</div>
        <div class="title">Leetcode春季赛</div>
        <div>End: 2022-08-31 16:16 CST</div>
      </div>
      <div class="progress-bar-row">
        <div class="progress-bar">
          <div class="done" />
          <div class="current" />
        </div>
      </div>

      <div class="status-row">
        <div>已经开始: 31:32:47</div>
        <div class="status">Running</div>
        <div>距离结束: 00:00:23</div>
      </div>
    </div>
  )
}

export default Header
