module.exports = {
    module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: 'http://positivityminds.com/',
        permanent: true,
      },
    ]
  },
}
    images: {
        //enter the domain or subdomain where you have WordPress installed 
      domains: ['positivityminds.com'],
    },
}
