/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Titillium Web\:900`, `Amaranth\:400,700`, `Roboto\:400,500`],
        display: "swap",
      },
    },
  ],
}
