import { WorkExperience } from 'api/personal-website-service/work-experience/work-experience.type'

const WorkExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="m-4 rounded-lg border p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800">
        {experience.jobTitle}
      </h3>
      <p className="text-gray-600">{experience.companyName}</p>
      <p className="text-sm text-gray-500">{experience.companyDescription}</p>
      <p className="mt-2 text-gray-500">
        {experience.startDate} - {experience.endDate}
      </p>
      <p className="mt-2 text-gray-600">{experience.description}</p>
    </div>
  )
}

function WorkExperiencePage({
  workExperiences
}: {
  workExperiences: WorkExperience[]
}) {
  return (
    <div className="mx-auto  p-4">
      <h1 className="mb-6 text-4xl font-bold text-gray-950">Work Experience</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workExperiences.map((experience) => (
          <WorkExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperiencePage
