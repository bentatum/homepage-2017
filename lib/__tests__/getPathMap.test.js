
import moment from 'moment'
import { getPathMap } from '..'
import { isObject } from 'lodash'
import BlogPostFactory from 'test/factories/BlogPost'

describe('getPathMap', () => {
  test('defaults', () => {
    const result = getPathMap()
    expect(isObject(result)).toBe(true)
  })

  test('example', () => {
    const p0 = BlogPostFactory.build({ date: moment(new Date()).add(-1, 'days') })
    const x0 = 'content/dist/content/blog/posts/2017/first-post.json'
    const p1 = BlogPostFactory.build({ date: new Date() })
    const x1 = 'content/dist/content/blog/posts/2017/second-post.json'
    const fileMap = { [x0]: p0, [x1]: p1 }
    const result = getPathMap(fileMap)
  //   expect(result.length).toBe(2)
  //   expect(result[0]).toBe(p1)
  //   expect(result[1]).toBe(p0)
  })
})
