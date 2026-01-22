import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <h1>Dashboard</h1>
        <Outlet />
    </div>
  )
}

export default Layout
