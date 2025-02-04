import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: RouteComponent
})

function RouteComponent() {
  return <h2 className="m-6 mb-4 text-xl font-bold">Admin Panel</h2>
}
