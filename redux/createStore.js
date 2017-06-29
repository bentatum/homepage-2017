
import { get, noop } from 'lodash'
import reducer from './reducer'
import { responsiveStoreEnhancer } from 'redux-responsive'
import { compose, createStore } from 'redux'

export default (initialState) => {
  const enhancer = compose(
    responsiveStoreEnhancer
  )

  return createStore(reducer, initialState, enhancer)
}
