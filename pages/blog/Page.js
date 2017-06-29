
import Link from 'next/link'
import { BasicLayout } from '../../layout'
import { postUrl } from '../../lib'
import { setDisplayName, mapProps, compose, pure } from 'recompose'
import { NAME } from './config'
import { mapProps as propsMapper } from './lib'

const enhance = compose(
  setDisplayName(NAME),
  mapProps(propsMapper),
  pure
)

export default enhance(props =>
  <BasicLayout>
    {props.posts.map((post, key) =>
      <div key={key}>
        <Link
          prefetch
          href={postUrl(post)}>
          <a>
            <h2>{post.title}</h2>
          </a>
        </Link>
        <p>{post.preview}</p>
      </div>
    )}
  </BasicLayout>
)
