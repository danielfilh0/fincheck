import { httpClient } from '../httpClient'

export interface ResetPasswordParams {
  newPassword: string
  token: string
}

export async function resetPassword(params: ResetPasswordParams) {
  const { data } = await httpClient.post('/auth/reset-password', params, {
    headers: {
      Authorization: 'Bearer ' + params.token
    }
  })

  return data
}
