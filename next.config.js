module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: '{post.link}', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
  images: {domains: ['positivityminds.com'],},
}
