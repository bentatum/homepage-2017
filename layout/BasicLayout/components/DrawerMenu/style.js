
import { WIDTH } from './config'
import { COLORS, SCALE, BOX_SHADOW } from '../../../../theme/config'

export default `
  .container {
    top: 0;
    right: 0;
    width: ${WIDTH}px;
    height: 100vh;
    transform: translate(${WIDTH}px, 0);
    position: absolute;
    box-shadow: ${BOX_SHADOW};
    background-size: cover;
    background-image: url('/static/clouds.gif')
  }

  nav {
    display: flex;
    flex-direction: column;
    padding: ${SCALE[1]}px;
    margin-top: ${SCALE[4]}px;
  }

  nav a {
    color: ${COLORS.black};
    text-decoration: none;
  }
`
