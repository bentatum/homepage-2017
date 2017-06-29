
import { HANDLERS } from './config'
import { Provider } from 'react-redux'
import { Content, DrawerMenu, Navbar } from './components'
import { compose, pure, withState, withHandlers } from 'recompose'

const enhance = compose(
  withState('menu', 'showMenu', false),
  withHandlers(HANDLERS),
  pure
)

export default enhance(props =>
  <div>
    <Navbar onMenuClick={props.handleMenuClick} />
    <DrawerMenu open={props.menu} />
    <Content children={props.children} />
  </div>
)
