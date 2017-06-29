
import faker from 'faker'
import { handleMenuClick } from '..'

describe('layout/BasicLayout/lib/handleMenuClick', () => {
  test('defaults', () => {
    const result = handleMenuClick()()
    expect(result).toBe(undefined)
  })

  test('showMenu', () => {
    const menu = faker.random.boolean()
    const showMenu = jest.fn()
    const props = { menu, showMenu }
    handleMenuClick(props)()

    expect(showMenu.mock.calls.length).toBe(1)
    expect(showMenu.mock.calls[0][0]).toBe(!menu)
  })
})
