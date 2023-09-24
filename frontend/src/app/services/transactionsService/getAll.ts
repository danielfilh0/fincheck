import { Transaction } from '../../entities/Transaction'
import { httpClient } from '../httpClient'

type TransactionsResponse = Array<Transaction>

export type TransactionsFilters = {
  month: number
  year: number
  bankAccountId?: string
  type?: Transaction['type']
}

export async function getAll(filters: TransactionsFilters) {
  const { data } = await httpClient.get<TransactionsResponse>('/transactions', {
    params: filters
  })

  return data
}
