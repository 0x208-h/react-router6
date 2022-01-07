import React from 'react'
import { Routes, Route, Outlet, Link, NavLink } from 'react-router-dom'
const ReactPage  = () => {
  return (
    <>
      <div>React</div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Basic />} />
          <Route path="/content" element={<Content />} />
          <Route path="/*/1" element={<Test />} />
        </Route>
      </Routes>
      <hr />
    </>
  )
}


const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <div><Link to=".">Basic</Link></div>
        <div><Link to="content">Content</Link></div>
        <div><Link to="/test/1">Test</Link></div>
      </div>
      <Outlet />
    </>
  )
}

const Basic = () => {
  return (
    <div>React，前端三大框架之一</div>
  )
}

const Content = () => {
  return (
    <div>React hooks</div>
  )
}

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default  ReactPage