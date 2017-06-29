
import getPosts from './getPosts'
import SUMMARY_JSON from 'content/dist/summary.json'

export default props => ({
  ...props,
  posts: getPosts(SUMMARY_JSON.fileMap)
})
