
import style from './style'

export default props =>
  <span>
    <style jsx>{style}</style>
    <div {...props} />
  </span>
