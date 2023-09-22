import { useQuery } from "@tanstack/react-query";

import { bankAccountsService } from "../services/bankAccounts";

export function useBankAccounts() {
  const { data, isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountsService.getAll
  })

  return { accounts: data ?? [], isFetching }
}