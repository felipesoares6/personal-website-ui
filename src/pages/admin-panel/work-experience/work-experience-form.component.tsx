import { WorkExperienceNew } from 'models/work-experience.model'
import { useState } from 'react'

const formInitialState: WorkExperienceNew = {
  jobTitle: '',
  companyName: '',
  companyDescription: '',
  startDate: '',
  endDate: '',
  description: ''
}

function WorkExperienceForm({
  onSubmit
}: {
  onSubmit: (data: WorkExperienceNew) => void
}) {
  const [values, setValue] = useState<WorkExperienceNew>(formInitialState)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    onSubmit(values)
  }

  return (
    <div className="max-w-lg rounded-lg p-6 ">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Add Work Experience
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit} method="POST">
        {/* Job Title */}
        <div>
          <label className="block font-medium text-gray-700">Job Title</label>
          <input
            name="jobTitle"
            type="text"
            value={values.jobTitle}
            onChange={handleChange}
            className="w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium text-gray-700">
            Company Name
          </label>
          <input
            name="companyName"
            type="text"
            value={values.companyName}
            onChange={handleChange}
            className="w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Company Description */}
        <div>
          <label className="block font-medium text-gray-700">
            Company Description
          </label>
          <input
            name="companyDescription"
            type="text"
            value={values.companyDescription}
            onChange={handleChange}
            className="w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Start & End Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">
              Start Date
            </label>
            <input
              name="startDate"
              type="date"
              value={values.startDate}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">End Date</label>
            <input
              name="endDate"
              type="date"
              value={values.endDate}
              onChange={handleChange}
              className="w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Save Experience
        </button>
      </form>
    </div>
  )
}

export default WorkExperienceForm
