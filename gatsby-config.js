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
	  }
	]
}