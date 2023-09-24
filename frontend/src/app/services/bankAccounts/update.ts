import { httpClient } from '../httpClient'

export interface UpdateBankAccountParams {
  id: string
  name: string
  initialBalance: number
  color: string
  type: 'CHECKING' | 'INVESTMENT' | 'CASH'
}

export async function update({
  id,
  ...params
}: UpdateBankAccountParams) {
  const { data } = await httpClient.put(`/bank-accounts/${id}`, params)

  return data
}
