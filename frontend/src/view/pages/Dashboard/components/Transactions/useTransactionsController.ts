import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard()

  const transactions = []

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true)
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false)
  }

  const hasTransactions = transactions.length > 0

  return {
    areValuesVisible,
    transactions: [],
    hasTransactions,
    isInitialLoading: false,
    isLoading: false,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  }
}
