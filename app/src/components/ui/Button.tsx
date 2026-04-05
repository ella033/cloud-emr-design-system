import type { ReactNode, ButtonHTMLAttributes } from 'react'
import Icon from './Icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'small' | 'medium' | 'large'
  leftIcon?: string
  loading?: boolean
  fullWidth?: boolean
  children: ReactNode
}

export default function Button({
  variant = 'primary', size = 'medium', leftIcon, loading, fullWidth,
  children, disabled, className = '', ...props
}: ButtonProps) {
  const sizeMap = { small: 'btn-sm', medium: 'btn-md', large: 'btn-lg' }

  return (
    <button
      className={`btn btn-${variant} ${sizeMap[size]} ${fullWidth ? 'btn-full' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="btn-spinner" />}
      {leftIcon && !loading && <Icon name={leftIcon} size={size === 'small' ? 12 : 14} />}
      {children}
    </button>
  )
}
