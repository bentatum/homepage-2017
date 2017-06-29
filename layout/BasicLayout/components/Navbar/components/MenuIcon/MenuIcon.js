
import { get, noop } from 'lodash'
import { PureComponent } from 'react'
import { SPEED, OFFSET, MARGIN, WIDTH, TOP_Y, BOTTOM_Y } from './config'
import { TweenLite } from 'gsap'
import { withState } from 'recompose'

@withState('open', 'setOpen', false)
@withState('animating', 'setAnimating', false)
export default class MenuIcon extends PureComponent {
  animate (onComplete) {
    TweenLite.to(this.topLine, SPEED, {
      attr:{ 
        y2: !this.props.open ? BOTTOM_Y : TOP_Y
      },
      onComplete: () => {
        TweenLite.to(this.bottomLine, SPEED, {
          attr:{ 
            y2: !this.props.open ? TOP_Y : BOTTOM_Y
          },
          onComplete
        })
      }
    })
  }

  handleClick () {
    if (this.props.animating) {
      return
    }


    this.props.setAnimating(true, () => {
      this.animate(() => {
        this.props.setOpen(!this.props.open)
        this.props.setAnimating(false)
        get(this.props, 'onClick', noop)()
      })
    })
  }

  render () {
    return (
      <svg
        width={WIDTH}
        height={WIDTH / 2}
        onClick={::this.handleClick}>
        <line
          x1={0}
          x2={WIDTH}
          y1={TOP_Y}
          y2={TOP_Y}
          strokeWidth={3}
          ref={ref => { this.topLine = ref }}
          stroke='black' />
        <line
          x1={0}
          x2={WIDTH}
          y1={BOTTOM_Y}
          y2={BOTTOM_Y}
          strokeWidth={3}
          ref={ref => { this.bottomLine = ref }}
          stroke='black' />
      </svg>
    )
  }
}
