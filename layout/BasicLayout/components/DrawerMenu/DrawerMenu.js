
import style from './style'
import Link from 'next/link'
import cx from 'classnames'
import { PureComponent } from 'react'
import { Power4, TweenLite } from 'gsap'
import { WIDTH, SPEED } from './config'
import autobind from 'autobind-decorator'

export default class DrawerMenu extends PureComponent {
  @autobind
  close () {
    TweenLite.to(this.component, SPEED, {
      x: WIDTH,
      ease: Power4.easeIn
    })
  }

  @autobind
  open () {
    TweenLite.to(this.component, SPEED, {
      x: 0,
      ease: Power4.easeOut
    })
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.open && nextProps.open) {
      this.open()
    } else if (this.props.open && !nextProps.open) {
      this.close()
    }
  }

  componentDidMount () {
    if (this.props.open) {
      this.open()
    }
  }

  render () {
    return (
      <span>
        <style jsx>{style}</style>
        <div
          ref={ref => { this.component = ref } }
          className='container'>
          <nav>
            <Link href='/blog' prefetch><a>Blog</a></Link>
          </nav>
        </div>
      </span>
    )
  }
}
