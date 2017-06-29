
import { sample } from 'lodash'
import { mapProps as propsMapper } from './lib'
import { BasicLayout } from '../../../../layout'
import { mapProps, compose, pure, setDisplayName } from 'recompose'
import { NAME } from './config'

const enhance = compose(
  setDisplayName(NAME),
  mapProps(propsMapper),
  pure
)

export default enhance(props => {
  console.log(props)
  return <BasicLayout>
    <p>post</p>
  </BasicLayout>
})
