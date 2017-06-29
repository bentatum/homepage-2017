
import { keys } from 'lodash'

export default fileMap =>
  keys(fileMap)
    .filter(file => {
      if (file.indexOf('content/dist/content/blog') === 0) {
        return true
      }
    })
    .map(file => fileMap[file])
    .sort((a, b) => {
      const aDate = Date.parse(a.date)
      const bDate = Date.parse(b.date)
      return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
    })
