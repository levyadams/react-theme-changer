import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default function One() {
    return (
        <div className="main">
        <ThemeChanger currentThemeIndex={0}/>
        <div className="nav">
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/one'>one</Link></li>
                <li><Link to='/two'>two</Link></li>
                <li><Link to='/three'>three</Link></li>
                <li><Link to='/four'>four</Link></li>
            </ul>
        </div>

        <h1>Header One</h1>
        <h2>Header Two</h2>
        <h3>Header Three</h3>
        <h4>Header Four</h4>
    </div>
  )
}