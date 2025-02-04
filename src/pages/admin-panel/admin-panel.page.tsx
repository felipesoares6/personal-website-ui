import { Link, Outlet } from '@tanstack/react-router'

function AdminPanelPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-900 p-4 text-white">
        <h2 className="mb-4 text-xl font-bold">Admin Panel</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/admin/work-experience" className="hover:text-gray-400">
              Work Experience List
            </Link>
          </li>

          <li>
            <Link
              to="/admin/work-experience/create"
              className="hover:text-gray-400"
            >
              Create Work Experience
            </Link>
          </li>
        </ul>
      </nav>

      <main className="w-max">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPanelPage
