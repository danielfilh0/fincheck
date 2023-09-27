import { httpClient } from '../httpClient'

export interface ForgetPasswordParams {
  email: string
}

export async function forgetPassword(params: ForgetPasswordParams) {
  const { data } = await httpClient.post('/auth/forget-password', params)

  return data
}
