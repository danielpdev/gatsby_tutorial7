import React from "react"
import Layout from "../components/layout"
import { css } from 'react-emotion';
import { rhythm } from "../utils/typography"
import { graphql, Link } from 'gatsby';


export default ({data}) => {
  console.log(data);
  return (
  <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <h4> {data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({
    node
    })=>(
      <div key={node.id}>
        <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
        <h3
          className={css`
        margin-bottom: ${rhythm(1/4)};
        `}  
        >
        {node.frontmatter.title}{" "}
        <span className={css`
          color: #bbb;
        `}>
          - {node.frontmatter.date}
        </span>
        </h3>
        <p>{node.excerpt}</p>
            </Link>
</div>
    ))}
    </div>
  </Layout>
  )
}

export const query = graphql`
 query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields{
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }`