import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Chat from '../container/Chat'

export default () => (
  <div>
    <Head title="Home" />

    <Nav />

    <div className="hero">
      <div className="avatar">
        <img src="/static/cool-avatar.jpg" />
      </div>
      <h1 className="title">micro-chat</h1>
      <p className="description">Just a very simple <strong>chat-ui</strong> written with ReactJS</p>

      <div className="chat-box">
        <div>
          <Chat />
        </div>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        margin-top: 2em;
      }

      .chat-box {
        display: flex;
        margin: 0 0 2em 0;
        justify-content: center;
      }

      .chat-box > div {
        max-width: 950px;
        width: 100%;
        margin-left: 2em;
      }

      .chat-box > div:first-child {
        margin-left: 0;
      }

      .avatar {
        text-align: center;
      }

      .avatar img {
        border-radius: 50%;
        width: 100px;
      }

      .title {
        margin: 0;
        padding-top: 0.5em;
        font-size: 48px;
      }

      .title, .description {
        text-align: center;
      }

      .description {
        margin: 0.5em 0;
      }
    `}</style>
  </div>
)
