interface IconProps {
  name: string
  size?: number
  className?: string
}

export default function Icon({ name, size = 16, className = '' }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      alt={name}
      className={`icon ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    />
  )
}
