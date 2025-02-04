import { createFileRoute } from '@tanstack/react-router'
import { WorkExperienceService } from 'api/personal-website-service/work-experience/work-experience.service'
import WorkExperiencePage from 'pages/work-experience.page'

function WorkExperienceListRoute() {
  const workExperiences = Route.useLoaderData()
  const navigate = Route.useNavigate()

  return (
    <WorkExperiencePage
      workExperiences={workExperiences}
      navigateToList={() => navigate({ to: '/admin/work-experience' })}
    />
  )
}

export const Route = createFileRoute('/admin/work-experience/')({
  component: WorkExperienceListRoute,
  loader: async () => WorkExperienceService.getAllWorkExperience()
})
