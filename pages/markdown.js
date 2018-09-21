import dynamic from 'next/dynamic'
import Layout from '../components/layout'
const Markdown = dynamic(import('react-markdown'))

export default () => (
  <Layout>
    <h1>react markdown</h1>
    <div className="markdown">
      <Markdown
        source={`
# 一级标题
### 三级标题
> 前面不能有空格
        `}
      />
    </div>
    <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
)
