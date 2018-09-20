import React from 'react'
import Layout from '../components/layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {

  static async getInitialProps () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
      shows: data
    }
  }

  render () {
    const PostLink = (props) => (
      <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
        </Link>
      </li>
    )
    return (
      <Layout title="index">
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}
