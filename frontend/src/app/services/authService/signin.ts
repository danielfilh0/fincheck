import { httpClient } from '../httpClient'

export interface SigninParams {
  email: string
  password: string
}

interface SigninResponse {
  acessToken: string
}

export async function signin(params: SigninParams) {
  const { data } = await httpClient.post<SigninResponse>('/auth/signin', params)

  return data
}
