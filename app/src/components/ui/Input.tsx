import type { InputHTMLAttributes } from 'react'
import Icon from './Icon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: string
  inputSize?: 'small' | 'medium' | 'large'
}

export default function Input({
  label, error, helperText, leftIcon, inputSize = 'medium', className = '', ...props
}: InputProps) {
  const hasError = !!error
  return (
    <div className={`input-group ${className}`}>
      {label && <label className={`input-label ${hasError ? 'input-label-error' : ''}`}>{label}</label>}
      <div className={`input-wrap input-${inputSize} ${hasError ? 'input-error' : ''} ${props.disabled ? 'input-disabled' : ''}`}>
        {leftIcon && <Icon name={leftIcon} size={14} className="input-icon" />}
        <input className="input-field" {...props} />
      </div>
      {error && <span className="input-error-msg">{error}</span>}
      {helperText && !error && <span className="input-helper">{helperText}</span>}
    </div>
  )
}
