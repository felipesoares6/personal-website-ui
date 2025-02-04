import { WorkExperienceService } from 'api/personal-website-service/work-experience/work-experience.service'
import { WorkExperienceNew } from 'models/work-experience.model'
import WorkExperienceForm from './work-experience-form.component'

function WorkExperienceCreate({
  navigateToAdmin
}: {
  navigateToAdmin: () => void
}) {
  const handleSubmit = async (workExperienceNew: WorkExperienceNew) => {
    console.log(workExperienceNew)

    try {
      await WorkExperienceService.createWorkExperience({
        payload: workExperienceNew
      })

      navigateToAdmin()
    } catch (error) {
      console.log(error)
    }
  }

  return <WorkExperienceForm onSubmit={handleSubmit} />
}

export default WorkExperienceCreate
