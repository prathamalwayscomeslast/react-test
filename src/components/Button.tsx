import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'complete'
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const cls = ['btn', variant === 'complete' ? 'btn--complete' : '', className].filter(Boolean).join(' ')
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
