module.exports = {
  pathPrefix: `/ecg-landing`,
  plugins: [
	  {
	    resolve: `gatsby-plugin-google-analytics`,
	    options: {
	      trackingId: "UA-36728721-1",
	      // Puts tracking script in the head instead of the body
	      head: false
	    }
	  },
	  {
	  	resolve:`gatsby-plugin-react-helmet`
	  },
	  {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-MCJ4935",
      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,
    }
  },
	],
	siteMetadata: {
    siteURL: 'https://gci.heig-vd.ch',
  }
}