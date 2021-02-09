import React from "react"
import { Link } from "gatsby"
import "../styles.css"

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link to='/one'>one</Link></li>
        <li><Link to='/two'>two</Link></li>
        <li><Link to='/three'>three</Link></li>
        <li><Link to='/four'>four</Link></li>
      </ul>
    </div>
  )
}
