import React from 'react'
import { useNavigate, useParams, useSearchParams, useLocation} from 'react-router-dom'
interface ReduxPageProps {
  test: string
}

const ReduxPage = (props: ReduxPageProps) => {
  console.log(props,'props')
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  // const [searchParams, setSearchParams] = useSearchParams()
  console.log(params, location, navigate, 'params')
  // console.log(searchParams, 'SearchParams')
  return (
    <>
      <div>Redux, {props.test}</div>
      <div>{params.id}</div>
      {/* <div>{SearchParams}</div> */}
    </>
  )
}

export default ReduxPage