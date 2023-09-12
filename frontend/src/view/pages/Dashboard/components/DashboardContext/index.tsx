import { createContext, useCallback, useState } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean
  isNewAccountModalOpen: boolean
  toggleValueVisibility: () => void
  openNewAccountModal: () => void
  closeNewAccountModal: () => void
}

export const DashboardContext = createContext({} as DashboardContextValue)

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true)
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false)

  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState)
  }, [])

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true)
  }, [])

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false)
  }, [])

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValueVisibility,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
