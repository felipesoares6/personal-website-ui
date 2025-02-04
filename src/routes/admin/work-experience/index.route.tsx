import { createFileRoute } from '@tanstack/react-router'
import { WorkExperienceService } from 'api/personal-website-service/work-experience/work-experience.service'
import WorkExperiencePage from 'pages/work-experience.page'

function WorkExperienceListRoute() {
  const workExperiences = Route.useLoaderData()

  return <WorkExperiencePage workExperiences={workExperiences} />
}

export const Route = createFileRoute('/admin/work-experience/')({
  component: WorkExperienceListRoute,
  loader: async () => WorkExperienceService.getAllWorkExperience()
})
