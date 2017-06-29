
import Page from '../..'
import { mapProps } from '..'
import { keys, isObject } from 'lodash'

describe(`${Page.displayName}/lib/mapProps`, () => {
  let result

  beforeEach(() => {
    const foo = 'bar'
    const props = { foo }
    result = mapProps(props)
  })

  test('defaults', () => {
    expect(isObject(result)).toBe(true)
    expect(keys(result).length).toBe(2)
  })

  test('posts', () => {
    expect(result).toHaveProperty('posts')
  })
})
