import type { ReactNode } from 'react'

interface BadgeProps {
  variant?: 'solid' | 'subtle' | 'info'
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'teal' | 'gray'
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  children: ReactNode
}

export default function Badge({ variant = 'solid', color = 'blue', size = 'small', children }: BadgeProps) {
  if (variant === 'info') {
    return <span className={`badge badge-info badge-${size}`}>{children}</span>
  }
  return (
    <span className={`badge badge-${variant}-${color} badge-${size}`}>
      {children}
    </span>
  )
}
