
import { SCALE } from '../../../../theme/config'

export default `
  .title {
    background-image: url('/static/benjamin-tatum-bitmoji-1.png');
    background-position-x: -14px;
    background-position-y: -12px;
    background-size: 59px;
    background-repeat: no-repeat;
    padding-left: 39px;
  }

  .container {
    z-index: 1;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: ${SCALE[0]}px ${SCALE[1]}px;
  }
`
