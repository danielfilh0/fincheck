export interface Transaction {
  id: string
  name: string
  categoryId: string
  bankAccountId: string
  value: number
  type: 'INCOME' | 'EXPENSE'
  date: string
  category?: {
    id: string
    name: string
    icon: string
  }
}
