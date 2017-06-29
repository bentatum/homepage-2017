
import faker from 'faker'
import { Factory } from 'rosie'

export default new Factory()
  .attr('title', faker.lorem.words)
  .attr('date', faker.date.past)
  .attr('preview', faker.lorem.sentence)
  .attr('dir', faker.system.filePath)
  .attr('base', faker.system.fileName)
  .attr('ext', faker.system.fileExt)
  .attr('sourceBase', faker.system.fileName)
  .attr('sourceExt', faker.system.fileExt)
