
import { get } from 'lodash'

export default props => {
  let post = null

  const url = get(props, 'url.query.fullUrl')

  if (url) {
    // 
    const postFilePath = `content/dist/content${url}.json`
    console.log(postFilePath)
    post = require(postFilePath)
  }

  // try {
    
  // } catch (err) {
  //   post = null
  // }

  return {
    ...props,
    post
  }
}
