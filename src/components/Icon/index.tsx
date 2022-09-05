import classnames from 'classnames'

type Props = {
  type: string
  className?: string
  onClick?: () => void
}

const Icon = ({ type, className, onClick }: Props) => {
  return (
    <svg
      className={classnames('icon', className)}
      aria-hidden="true"
      onClick={onClick}
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

export default Icon
