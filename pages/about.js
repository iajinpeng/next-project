
import React from 'react';
import cowsay from 'cowsay-browser';
import Layout from '../components/layout'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps () {
    return {
      name: '金鹏',
    }
  }

  render () {
    return (
      <Layout title="你说啥子哟">
        <div>
          <h1>About</h1>
          <div>
            <pre>
              {cowsay.say({ text: `hi ${this.props.name}!` })}
            </pre>
            <Link href={{ pathname: '/about', query: { name: 'nana' } }}>
              <a>to About</a>
            </Link>

            <br/>
            <img style={{width: '400px'}} src="/static/girl.jpg" alt=""/>
          </div>
          <style jsx>
            {`
              h1 {
                color: red;
              }
            `}
          </style>
        </div>
      </Layout>
    )
  }
}
