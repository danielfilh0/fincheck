import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard()

  const transactions: any = []

  const hasTransactions = transactions.length > 0

  return {
    areValuesVisible,
    transactions,
    hasTransactions,
    isInitialLoading: false,
    isLoading: false,
  }
}
