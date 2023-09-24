import { CrossCircledIcon } from '@radix-ui/react-icons'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../../app/utils/cn'

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, className, id, error, placeholder, ...props }, ref) => {
  const inputId = id ?? name

  return (
    <div className="relative">
      <input
        {...props}
        ref={ref}
        name={name}
        id={inputId}
        className={cn('bg-white rounded-lg w-full border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
          error && '!border-red-900', className)}
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700
        peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>

      {error && (
        <div className="mt-2 flex gap-2 items-center text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'
