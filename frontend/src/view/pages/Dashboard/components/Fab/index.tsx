import { PlusIcon } from '@radix-ui/react-icons'
import { DropdownMenu } from '../../../../components/DropdownMenu'
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon'
import { BankAccountIcon } from '../../../../components/icons/BankAccountIcon'
import { useDashboard } from '../DashboardContext/useDashboard'

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard()

  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center text-white">
            <PlusIcon className="w-6 h-6" />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="data-[side=bottom]:animate-slide-down-and-fade">
          <DropdownMenu.Item className="gap-2" onSelect={() => openNewTransactionModal('EXPENSE')}>
            <CategoryIcon type="EXPENSE" />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2" onSelect={() => openNewTransactionModal('INCOME')}>
            <CategoryIcon type="INCOME" />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2" onSelect={openNewAccountModal}>
            <div className="flex items-center justify-center">
              <BankAccountIcon />
            </div>
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
