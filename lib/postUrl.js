
export default post =>
  `${post.dir.split('content/dist/content').join('')}/${post.base.split('.json').join('')}`
