import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/work-experience')({
  component: Outlet
})
