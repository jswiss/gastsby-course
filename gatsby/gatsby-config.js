import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: "Slick's Slices",
    siteUrl: 'https://gatsby.pizza',
    description: 'The second best pizza in Glasgow',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'xydqb61o',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
