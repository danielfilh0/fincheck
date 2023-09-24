import { FilterIcon } from '../../../../components/icons/FilterIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MONTHS } from '../../../../../app/config/constants'
import { SliderOption } from './SliderOption'
import { SliderNavigation } from './SliderNavigation'
import { formatCurrency } from '../../../../../app/utils/formatCurrency'
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon'
import { useTransactionsController } from './useTransactionsController'
import { cn } from '../../../../../app/utils/cn'
import { Spinner } from '../../../../components/Spinner'
import emptyStateImage from '../../../../../assets/empty-state.svg'
import { TransactionTypeDropdown } from './TransactionTypeDropdown.tsx'
import { FiltersModal } from './FiltersModal/index.tsx'
import { formatDate } from '../../../../../app/utils/formatDate.ts'
import { EditTransactionModal } from '../../modals/EditTransactionModal/index.tsx'

export function Transactions() {
  const {
    areValuesVisible,
    isLoading,
    isInitialLoading,
    hasTransactions,
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    handleChangeFilters,
    transactions,
    filters,
    handleApplyFilters,
    handleOpenEditModal,
    handleCloseEditModal,
    isEditModalOpen,
    transactionBeingEdited,
  } = useTransactionsController()

  if (isInitialLoading) {
    return (
      <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 lg:p-10 flex flex-col">
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-10 h-10" />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 lg:p-10 flex flex-col">
      <FiltersModal
        open={isFiltersModalOpen}
        onApplyFilters={handleApplyFilters}
        onClose={handleCloseFiltersModal}
      />
      <header>
        <div className="flex justify-between items-center">
          <TransactionTypeDropdown
            onSelect={handleChangeFilters('type')}
            selectedType={filters.type}
          />

          <button onClick={handleOpenFiltersModal}>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper
            slidesPerView={3}
            centeredSlides
            initialSlide={filters.month}
            onSlideChange={(swiper) => {
              handleChangeFilters('month')(swiper.realIndex)
            }}
          >
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    index={index}
                    isActive={isActive}
                    month={month}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full">
            <Spinner className="w-10 h-10" />
          </div>
        )}

        {!hasTransactions && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full">
            <img src={emptyStateImage} alt="Empty state" />
            <p className="text-gray-700">Não encontramos nenhuma transação!</p>
          </div>
        )}

        {hasTransactions && !isLoading && (
          <>
            {transactionBeingEdited && (
              <EditTransactionModal
                open={isEditModalOpen}
                onClose={handleCloseEditModal}
                transaction={transactionBeingEdited}
              />
            )}

            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4"
                role="button"
                onClick={() => handleOpenEditModal(transaction)}
              >
                <div className="flex-1 flex items-center gap-3">
                  <CategoryIcon
                    type={transaction.type}
                    category={transaction.category?.icon}
                  />
                  <div>
                    <strong className="font-bold tracking-[-0.5px] block">
                      {transaction.name}
                    </strong>
                    <span className="text-sm text-gray-600">
                      {formatDate(new Date(transaction.date))}
                    </span>
                  </div>
                </div>

                <span
                  className={cn(
                    'tracking-[-0.5px] font-medium',
                    transaction.type === 'EXPENSE'
                      ? 'text-red-800'
                      : 'text-green-800',
                    !areValuesVisible && 'blur-md'
                  )}
                >
                  {transaction.type === 'EXPENSE' ? '- ' : '+ '}
                  {formatCurrency(transaction.value)}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
