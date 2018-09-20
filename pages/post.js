import React from 'react'
import {withRouter} from 'next/router'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'


class Page extends React.Component {
  static async getInitialProps (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
  }

  render () {
    return (
      <Layout>
        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={this.props.show.image.medium}/>
      </Layout>
    )
  }
}

export default withRouter(Page)
