
import style from './style'
import { MenuIcon } from './components'
import Link from 'next/link'

export default props =>
  <div>
    <style jsx>{style}</style>
    <div className='container'>
      <Link prefetch href='/'>
        <a>
          <div className='title'>
            <h1>Benjamin Tatum</h1>
          </div>
        </a>
      </Link>
      <MenuIcon onClick={props.onMenuClick} />
    </div>
  </div>
