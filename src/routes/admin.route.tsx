import { createFileRoute } from '@tanstack/react-router'
import AdminPanelPage from 'pages/admin-panel/admin-panel.page'

export const Route = createFileRoute('/admin')({
  component: AdminPanelPage
})
