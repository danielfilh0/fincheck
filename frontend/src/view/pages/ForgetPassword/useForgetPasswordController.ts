import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { authService } from '../../../app/services/authService'
import { ForgetPasswordParams } from '../../../app/services/authService/forget-password'

const schema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido')
})

type FormData = z.infer<typeof schema>

export function useForgetPasswordController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['forget-password'],
    mutationFn: async (data: ForgetPasswordParams) => {
      return authService.forgetPassword(data)
    },
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data)
      toast.success('Link enviado!')
      reset()
    } catch {
      toast.error('Erro ao enviar link!')
    }
  })

  return { register, handleSubmit, errors, isLoading }
}
