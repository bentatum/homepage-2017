
const getPathMap = require('./lib/getPathMap')

module.exports = {
  exportPathMap: getPathMap(require('./content/dist/summary.json').fileMap)
}
