import { WorkExperienceService } from 'api/personal-website-service/work-experience/work-experience.service'
import { WorkExperience } from 'api/personal-website-service/work-experience/work-experience.type'

const WorkExperienceCard = ({
  experience,
  onDelete
}: {
  experience: WorkExperience
  onDelete: () => void
}) => {
  return (
    <div className="rounded-lg border p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800">
        {experience.jobTitle}
      </h3>
      <p className="text-gray-600">{experience.companyName}</p>
      <p className="text-sm text-gray-500">{experience.companyDescription}</p>
      <p className="mt-2 text-gray-500">
        {experience.startDate} - {experience.endDate}
      </p>
      <p className="mt-2 text-gray-600">{experience.description}</p>

      <button className="" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

function WorkExperiencePage({
  workExperiences,
  navigateToList
}: {
  workExperiences: WorkExperience[]
  navigateToList: () => void
}) {
  const handleDeleteWorkExperience = async (workExperienceId: number) => {
    try {
      await WorkExperienceService.deleteWorkExperience({ workExperienceId })

      navigateToList()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="rounded-lg p-6">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Work Experiences
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workExperiences.map((experience) => (
          <WorkExperienceCard
            key={experience.id}
            experience={experience}
            onDelete={() => handleDeleteWorkExperience(experience.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkExperiencePage
