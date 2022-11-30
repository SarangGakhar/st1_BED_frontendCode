import React from 'react'
import './BlogCard.css'
export default function BlogCard(props) {
  return (
    <>
    <div className="card">
    <div class="title blogitem"><h3>Title-</h3>{props.title}</div>
    <div class="author blogitem"><h3>Author-</h3>{props.author}</div>
    <div class="content blogitem"><h3>Content-</h3>{props.content}</div>
    </div>
    </>
  )
}
