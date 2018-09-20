import React from 'react'
import Head from 'next/head'
import Header from './Header'

export default class extends React.Component {
  render () {
    const {children, title} = this.props;
    return (
      <div>
        <Head>
          <title>{ title || 'default title' }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header/>

        { children }

        <footer>
          {'I`m here to stay'}
        </footer>
      </div>
    )
  }
}
