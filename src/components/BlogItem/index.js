// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {itemsList} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = itemsList

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item">
        <img src={imageUrl} alt={title} className="img123" />
        <div className="card">
          <p className="title1">{topic}</p>
          <h1 className="topic">{title}</h1>
          <div className="author">
            <img src={avatarUrl} alt={title} className="avatar" />
            <p className="a">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
