import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export default function Button({ children, ...props }: ButtonProps) {
  return (
      <button className="btn" {...props}>
        {children}
      </button>
  )
}