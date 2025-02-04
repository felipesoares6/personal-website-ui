import { buildApiClient } from '../api-client'

export const personalWebsiteService = buildApiClient({
  baseURL: import.meta.env.VITE_PERSONAL_WEBSITE_SERVICE_URL as string
})
