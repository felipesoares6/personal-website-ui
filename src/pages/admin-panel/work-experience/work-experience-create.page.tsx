import { WorkExperienceService } from 'api/personal-website-service/work-experience/work-experience.service'
import { WorkExperienceNew } from 'models/work-experience.model'
import WorkExperienceForm from './work-experience-form.component'

function WorkExperienceCreatePage({
  navigateToList
}: {
  navigateToList: () => void
}) {
  const handleSubmit = async (workExperienceNew: WorkExperienceNew) => {
    try {
      await WorkExperienceService.createWorkExperience({
        payload: workExperienceNew
      })

      navigateToList()
    } catch (error) {
      console.error(error)
    }
  }

  return <WorkExperienceForm onSubmit={handleSubmit} />
}

export default WorkExperienceCreatePage
