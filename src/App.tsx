import React, {lazy, Suspense} from 'react';
// import logo from './logo.svg';
import { Routes, Route, BrowserRouter, Navigate, Link, Outlet, useRoutes, Router } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
const Counter = lazy(() => import('./features/counter/Counter'))
const ReduxPage = lazy(() => import('./features/ReduxPage'))
const ReactPage = lazy(() => import('./features/ReactPage'))
const NotFound = lazy(() => import('./features/NotFound'))
const TestWithRouter = lazy(() => import('./features/TestWithRouter'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={null}>
          {/* <UseRouter /> */}
          <Routes>     
            <Route path="/" element={<Layout />}>
              <Route path="counter" element={<Counter />} />
              <Route path="react" element={<ReactPage />} />
              <Route path="redux/:id" element={<ReduxPage test='test' />} />
            </Route>
            <Route path='withrouter' element={< TestWithRouter />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="*" element={<Navigate to="/counter" replace />} /> */}
            {/* <Route path="/react/*" element={<ReactPage />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function UseRouter(){
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'counter',
          element: <Counter />
        },
        {
          path: 'react',
          element: <ReactPage />
        },
        {
          path: "redux/:id",
          element: <ReduxPage test='test' />
        }
      ]
    },
    {
      path: 'withRouter',
      element: <TestWithRouter />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  return element
}

function Layout(){
  return (
    <>
      <p>主页面</p>
      <ul style={{listStyle: 'none'}}>
        <li>
          <Link to="counter">Counter组件</Link>
        </li>
        <li>
          <Link to="react">react</Link>
        </li>
        <li>
          <Link to="redux/3?pid=1" state={{ name: 'hch' }} replace>redux</Link>
        </li>
        <li>
          <Link to="withRouter">WithRouter</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default App;
