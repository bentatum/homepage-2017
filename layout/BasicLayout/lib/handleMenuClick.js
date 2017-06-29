
import { get, noop } from 'lodash'

export default (props) => () => {
  const menu = get(props, 'menu')
  get(props, 'showMenu', noop)(!menu)
}
