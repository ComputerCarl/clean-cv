module.exports = {
  siteMetadata: {
    title: `Carl Mann - Delegate your technical tasks to a tech whiz.`,
    description: `For more than two decades, Carl's been helping people in need solve technical problems. He is now available for you.`,
    author: `@gotprops`,
    siteUrl: `https://computercarl.com/`,
    color: {
      darkest: '#34374a',
      dark: '#595f7c',
      medium: '#777ba0',
      light: '#8892b5',
      lightest: '#a4afc5'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `computer-carl-va-csa`,
        short_name: `Tech Help`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
