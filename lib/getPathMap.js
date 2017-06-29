
module.exports = (fileMap = {}) => {
  const posts = {}

  Object.keys(fileMap).forEach(file => {
    if (file.indexOf('content/dist/content/blog/posts') === 0) {
      const page = file.split('content/dist/content').join('').split('.json').join('')
      posts[page] = {
        page: '/blog/pages/post',
        query: {
          fullUrl: page
        }
      }
    }
  })

  const pages = {
    '/': { page: '/' },
    '/blog': { page: '/blog' }
  }

  return Object.assign({}, pages, posts)
}
