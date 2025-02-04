export type WorkExperience = {
  id: number
  jobTitle: string
  companyName: string
  companyDescription: string | null
  startDate: string
  endDate: string | null
  description: string | null
  createdAt: string
  updatedAt: string
}

export type WorkExperienceNew = {
  jobTitle: string
  companyName: string
  companyDescription: string | null
  startDate: string
  endDate: string | null
  description: string | null
}
