module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: 'http://positivityminds.com/', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
