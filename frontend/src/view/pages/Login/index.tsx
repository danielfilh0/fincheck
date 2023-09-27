import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useLoginController } from './useLoginController'

export function Login() {
  const { register, handleSubmit, errors, isLoading } = useLoginController()

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Entre em sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
          <Link to="/register" className="tracking-[-1px] text-teal-900 font-medium">Crie uma conta</Link>
        </p>
      </header>

      <form
        className="mt-[60px] flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register('password')}
        />
        <Button
          type="submit"
          className="mt-2"
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </form>

      <Link to="/forget-password" className="tracking-[-1px] text-teal-900 font-medium mt-2 mx-auto w-[max-content] block">Esqueci minha senha</Link>
    </>
  )
}
