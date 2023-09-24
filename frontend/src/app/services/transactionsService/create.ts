import { httpClient } from '../httpClient'

export interface CreateTransactionParams {
  bankAccountId: string
  categoryId: string
  name: string
  value: number
  type: 'INCOME' | 'EXPENSE'
  date: string
}

export async function create(params: CreateTransactionParams) {
  const { data } = await httpClient.post('/transactions', params)

  return data
}
