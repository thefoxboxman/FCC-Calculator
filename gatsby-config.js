module.exports = {
	siteMetadata: {
		title: "FCC Calculator",
		description: "Freecodecamp project",
		author: "F. John De Costa",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				// eslint-disable-next-line no-undef
				path: `${__dirname}/src/images`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "",
				short_name: "",
				start_url: "/",
				background_color: "#f5f5f5",
				theme_color: "#f5f5f5",
				display: "minimal-ui",
				icon: "src/images/fox-icon.png", // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
}
