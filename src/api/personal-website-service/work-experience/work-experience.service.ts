import { WorkExperienceNew } from 'models/work-experience.model'
import { personalWebsiteService } from '../personal-website-service.client'
import { WorkExperienceResponse } from './work-experience.type'

const getAllWorkExperience = async (): Promise<WorkExperienceResponse> => {
  return (await personalWebsiteService.get('/work-experience')).data
}

const createWorkExperience = async ({
  payload
}: {
  payload: WorkExperienceNew
}): Promise<WorkExperienceResponse> => {
  return (await personalWebsiteService.post('/work-experience', payload)).data
}

export const WorkExperienceService = {
  getAllWorkExperience,
  createWorkExperience
}
