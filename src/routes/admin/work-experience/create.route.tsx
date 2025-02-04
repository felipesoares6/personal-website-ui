import { createFileRoute } from '@tanstack/react-router'
import WorkExperienceCreate from 'pages/admin-panel/work-experience/work-experience-create.page'

function WorkExperienceCreateRoute() {
  const navigate = Route.useNavigate()

  return (
    <WorkExperienceCreate
      navigateToAdmin={() => navigate({ to: '/admin/work-experience' })}
    />
  )
}

export const Route = createFileRoute('/admin/work-experience/create')({
  component: WorkExperienceCreateRoute
})
