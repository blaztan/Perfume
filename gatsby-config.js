module.exports = {
  siteMetadata: {
    title: `Perfume`,
    description: `Landing page project made with gatsbyjs`,
    author: `zino chan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-smoothscroll`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`],
      },
    },

    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,
        selector: "[data-sal]",
        animateClassName: "sal-animate",
        disabledClassName: "sal-disabled",
        rootMargin: "0% 50%",
        enterEventName: "sal:in",
        exitEventName: "sal:out",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Perfume Shop`,
        short_name: `Perfume`,
        description: `Gatsby Perfume landing page`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
