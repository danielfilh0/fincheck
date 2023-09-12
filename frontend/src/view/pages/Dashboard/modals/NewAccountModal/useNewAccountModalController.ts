import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewAccountModalController() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
  } = useDashboard()

  return {
    isNewAccountModalOpen,
    closeNewAccountModal
  }
}