import { Component } from 'solid-js'
import avatarImg from '../../assets/avatar.jpeg'
import './index.scss'

const Avatar: Component = () => {
  return (
    <div class="avatar-box">
      <img src={avatarImg} alt="avatar" />
    </div>
  )
}

export default Avatar
