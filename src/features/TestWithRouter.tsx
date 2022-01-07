import React, { useState } from "react";
import { useLocation, useNavigate, useParams, Navigate } from 'react-router-dom'
const TestWithRouter = (props: any) => {
  const navigate = useNavigate()
  const [count, setCount] = useState<number>(0)
  console.log(props, 'withrouter props')
  return (
    <div style={{ margin: '50px auto' }}>  
      <div>Test, WithRouter, {count}</div>
      <div style={{ cursor: 'pointer' }} onClick={() => navigate('../counter')}>push</div>
      <div style={{ cursor: 'pointer' }} onClick={() => navigate('../counter', { replace: true })}>replace</div>
      <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>go</div>
      <div style={{ cursor: 'pointer' }} onClick={() => setCount(count + 1)}>增加</div>
      { count === 3 && <Navigate to=".." />}
    </div>
  )
}

const withRouter = (Component: any) => {
  const ComponentWithRouterProp = (props: any) => {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    return (
      <Component {...props} router={{location, navigate, params}} />
    ) 
  }
  return ComponentWithRouterProp
}

export default withRouter(TestWithRouter)