import type { ReactNode } from 'react'

interface CardProps {
  title: string
  icon?: ReactNode
  actions?: ReactNode
  footer?: ReactNode
  wide?: boolean
  children: ReactNode
  className?: string
}

export default function Card({ title, icon, actions, footer, wide, children, className = '' }: CardProps) {
  return (
    <div className={`card ${wide ? 'card-wide' : ''} ${className}`}>
      <div className="card-header">
        {icon && <span className="card-header-icon">{icon}</span>}
        <span className="card-header-title">{title}</span>
        {actions && <div className="card-header-actions">{actions}</div>}
      </div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  )
}
